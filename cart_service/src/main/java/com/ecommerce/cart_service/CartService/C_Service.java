package com.ecommerce.cart_service.CartService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.cart_service.Repository.CartRepository;
import com.ecommerce.cart_service.entity.CartEntity;

@Service
public class C_Service {
@Autowired
	private CartRepository cRepo;
	
	public CartEntity addTocart(CartEntity c) {
		return cRepo.save(c);
	}
	
	public List<CartEntity> getUserCart(Long userId){
		return cRepo.findByUserId(userId);
		
	}

}
