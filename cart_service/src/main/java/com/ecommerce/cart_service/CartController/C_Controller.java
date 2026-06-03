package com.ecommerce.cart_service.CartController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.cart_service.CartService.C_Service;
import com.ecommerce.cart_service.entity.CartEntity;

@RestController
@RequestMapping("/cart")
public class C_Controller {
	
	@Autowired
	private C_Service cServ;
	
//http://localhost:7070/cart/addToCart	
@PostMapping("/addToCart")
public CartEntity addToCart(@RequestBody CartEntity c) {
	return cServ.addTocart(c);
}

//http://localhost:7070/cart/carts?userId=5
@GetMapping("/carts")
public List<CartEntity> getUserCart(@RequestParam Long userId){
	return cServ.getUserCart(userId);
}
	
}
