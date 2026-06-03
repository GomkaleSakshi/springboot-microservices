package com.ecommerce.order_service.OrderService;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.order_service.OrderRepository.OrderRepo;
import com.ecommerce.order_service.entity.Order;

@Service
public class OrderService {

    @Autowired
    private OrderRepo oRepo;

    public OrderService (OrderRepo oRepo) {
    	this.oRepo=oRepo;
    	
    }
    public Order placeOrder(Order o) {
    	o.setDate(LocalDateTime.now());
    	o.setStatus("PLACED");
    	return oRepo.save(o);
    	
    }
    
    public List<Order> getUserOrders(Long userId){
    	return oRepo.findByUserId(userId);
    }
    }