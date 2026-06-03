package com.ecommerce.product_service.productServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.product_service.entity.Product;
import com.ecommerce.product_service.repository.ProductRepository;

@Service
public class ProdService {
	@Autowired
	private ProductRepository pRepo;
	
	public Product addProduct(Product p) {
		return pRepo.save(p);
	}
	
	public List<Product> getAllProducts(){
		return pRepo.findAll();
	}
	
}
