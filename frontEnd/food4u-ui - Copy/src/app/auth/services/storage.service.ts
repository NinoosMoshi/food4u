import { Injectable } from '@angular/core';

const TOKEN = 'temp-token';
const USER = 'temp-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToken(token:string): void{
    // window.localStorage.removeItem(TOKEN);
    // window.localStorage.setItem(TOKEN, token);
    window.sessionStorage.removeItem(TOKEN);
    window.sessionStorage.setItem(TOKEN, token);
  }

  public saveUser(user): void{
    // window.localStorage.removeItem(USER);
    // window.localStorage.setItem(USER, JSON.stringify(user));
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.setItem(USER, JSON.stringify(user));
  }


  static getToken(): string{
    // return localStorage.getItem(TOKEN);
    return sessionStorage.getItem(TOKEN);
  }

  static getUser(): any{
    // return JSON.parse(localStorage.getItem(USER));
    return JSON.parse(sessionStorage.getItem(USER));
  }

  static getUserId(): string{
    const user = this.getUser();
    if(user == null){
      return '';
    }
    return user.id;
 }



  static getUserRole(): string{
    const user = this.getUser();
    if(user == null){
      return '';
    }
    return user.role;
 }


 static isAdminLoggedIn(): boolean{
  if(this.getToken() == null){
    return false;
  }
  const role: string = this.getUserRole();
  return role == 'ROLE_ADMIN';
 }


 static isCustomerLoggedIn(): boolean{
  if(this.getToken() == null){
    return false;
  }
  const role: string = this.getUserRole();
  return role == 'ROLE_CUSTOMER';
 }


 static signOut(): void{
  //  window.localStorage.removeItem(TOKEN);
  //  window.localStorage.removeItem(USER);
   window.sessionStorage.removeItem(TOKEN);
   window.sessionStorage.removeItem(USER);
 }




}
