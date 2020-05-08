package com.example.springex.repository;

import com.example.springex.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {
    Product findById(int Id);

}
