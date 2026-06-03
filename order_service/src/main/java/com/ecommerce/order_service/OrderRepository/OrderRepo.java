package com.ecommerce.order_service.OrderRepository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.order_service.entity.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {
	
	List<Order> findByUserId(Long userId);

}
