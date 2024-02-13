package com.ninos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class Food4UApplication {

	public static void main(String[] args) {
		SpringApplication.run(Food4UApplication.class, args);
	}

}
