import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'dashboard', component:CustomerDashboardComponent},
  {path:'menu', component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
