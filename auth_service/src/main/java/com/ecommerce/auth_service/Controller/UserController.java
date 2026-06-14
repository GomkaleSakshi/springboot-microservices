package com.ecommerce.auth_service.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.ecommerce.auth_service.Servicess.UserSerevice;
import com.ecommerce.auth_service.dto.LoginRequest;
import com.ecommerce.auth_service.entity.User;

//frontend connection
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserSerevice uServ;

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User u) {
        return uServ.registerUser(u);
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return uServ.loginUser(request.getEmail(), request.getPassword());
    }

    // GET USER BY EMAIL
    @GetMapping("/user")
    public User getUser(@RequestParam String email) {
        return uServ.getUserByEmail(email);
    }

    // USER HOME (PROTECTED)
    @GetMapping("/user/home")
    public String userHome() {
        return "User Home Page Access Granted";
    }

    // ADMIN DASHBOARD (PROTECTED)
    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "Admin Dashboard Access Granted";
    }
}