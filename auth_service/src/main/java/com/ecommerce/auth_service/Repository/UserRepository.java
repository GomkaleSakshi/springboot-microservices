package com.ecommerce.auth_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.auth_service.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
	

}
