package com.ecommerce.product_service.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.productServices.ProdService;

@RestController
@RequestMapping("/product")

//this is for frontend connection with home page
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {
	@Autowired
	private ProdService Pserv;
	
	//http://localhost:8282/product/addProduct
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product p) {
		return Pserv.addProduct(p);
	}
	
	//http://localhost:8282/product/products
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return Pserv.getAllProducts();
	}
}
