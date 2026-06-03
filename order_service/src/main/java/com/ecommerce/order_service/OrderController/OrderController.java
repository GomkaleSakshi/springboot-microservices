package com.ecommerce.order_service.OrderController;

import org.springframework.web.bind.annotation.*;

import com.ecommerce.order_service.OrderService.OrderService;
import com.ecommerce.order_service.entity.Order;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }
    
//http://localhost:8181/order/placeOrder
    @PostMapping("/placeOrder")
    public Order placeOrder(@RequestBody Order order) {
        return service.placeOrder(order);
    }
    
    
//http://localhost:8181/order/orders?userId=2
    @GetMapping("/orders")
    public List<Order> getUserOrders(@RequestParam Long userId) {
        return service.getUserOrders(userId);
    }
}