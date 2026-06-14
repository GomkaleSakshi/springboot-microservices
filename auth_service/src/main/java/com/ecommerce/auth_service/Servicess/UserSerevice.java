package com.ecommerce.auth_service.Servicess;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecommerce.auth_service.Repository.UserRepository;
import com.ecommerce.auth_service.entity.User;
import com.ecommerce.auth_service.security.JwtUtil;

@Service
public class UserSerevice {

    @Autowired
    private UserRepository uRepo;

    private final PasswordEncoder passEncode;
    private final JwtUtil jUtil;

    public UserSerevice(UserRepository uRepo, PasswordEncoder passEncode, JwtUtil jUtil) {
        this.uRepo = uRepo;
        this.passEncode = passEncode;
        this.jUtil = jUtil;
    }

    // USER REGISTRATION
    public User registerUser(User u) {
    	
        u.setPassword(passEncode.encode(u.getPassword()));
        u.setRole("ROLE_USER");
        return uRepo.save(u);
    }

    // GET USER BY EMAIL
    public User getUserByEmail(String email) {
        return uRepo.findByEmail(email);
    }

    // LOGIN (JWT)
    public String loginUser(String email, String password) {

        User user = uRepo.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!passEncode.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        // 🔥 PASS EMAIL + ROLE
        return jUtil.generateToken(user.getEmail(), user.getRole());
    }
}