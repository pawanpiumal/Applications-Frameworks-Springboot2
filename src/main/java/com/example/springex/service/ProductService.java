package com.example.springex.service;

import com.example.springex.model.Product;

import java.util.List;

public interface ProductService {
    void createProduct(Product p);
    void deleteProduct(Product p);
    List<Product> findAll();
    Product findById(int id);
    boolean updateProduct(Product p);
}
