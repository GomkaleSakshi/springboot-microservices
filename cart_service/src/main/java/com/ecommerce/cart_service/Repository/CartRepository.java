package com.ecommerce.cart_service.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.cart_service.entity.CartEntity;

public interface CartRepository extends JpaRepository<CartEntity, Long> {
	
	List<CartEntity> findByUserId(Long user_id);

}
