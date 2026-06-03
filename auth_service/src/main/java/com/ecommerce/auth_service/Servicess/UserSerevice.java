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

private JwtUtil jUtil;

public UserSerevice(UserRepository uRepo, PasswordEncoder passEncode,JwtUtil jUtil) {
    this.uRepo = uRepo;
    this.passEncode = passEncode;
    this.jUtil=jUtil;
}

//......User Registration.............
public User registerUser(User u) {
	
	// 🔐 Encrypt password before saving
    u.setPassword(passEncode.encode(u.getPassword()));
    return uRepo.save(u);
	
}
public User getUserByEmail(String EMAIL) {
	return uRepo.findByEmail(EMAIL);
	
}

	//...............User Login................
	public String loginUser(String email, String password) {

	    User user = uRepo.findByEmail(email);

//	    if (user == null) {
//	        return "User not found";
//	    }
//
//	    if (passEncode.matches(password, user.getPassword())) {
//	        return "Login Successful";
//	    } else {
//	        return "Invalid Password";
//	    }
	    
	    
	    //.........JWT Security..........
	    if (user == null) {
	        throw new RuntimeException("User not found");
	    }

	    if (!passEncode.matches(password, user.getPassword())) {
	        throw new RuntimeException("Invalid Password");
	    }

	    return jUtil.generateToken(user.getEmail());
	}
}

	
	    
	  
	    
	  