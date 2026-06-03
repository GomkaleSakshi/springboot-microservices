package com.ecommerce.auth_service.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.auth_service.Servicess.UserSerevice;
import com.ecommerce.auth_service.dto.LoginRequest;
import com.ecommerce.auth_service.entity.User;

@RestController
@RequestMapping("/auth")
public class UserController {
	@Autowired
	private UserSerevice uServ;
	
	//http://localhost:8081....body->raw->JSON........it send the data
	@PostMapping("/register")
	public User register(@RequestBody User u) {
		return uServ.registerUser(u);
	}
	
	//http://localhost:8081/user?email=sakshi1@example.com........retrive the data
	@GetMapping("/user")
	public User getUser(@RequestParam String email) {
	    return uServ.getUserByEmail(email);
	    
	} 
	
	
	//{
	  //"email": "pallavi2@example.com",
	  //"password": "pallavi1234"
	  
	//http://localhost:8081/auth/login.

	    @PostMapping("/login")
	    public String login(@RequestBody LoginRequest request) {
	        return uServ.loginUser(request.getEmail(), request.getPassword());
	    }
	    
	   }

	
