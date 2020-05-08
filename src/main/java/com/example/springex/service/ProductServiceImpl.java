package com.example.springex.service;

import com.example.springex.model.Product;
import com.example.springex.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepository pr;

    @Autowired
    private ProductServiceImpl(ProductRepository productRepository){
        pr=productRepository;
    }

    @Override
    public void createProduct(Product p) {
        pr.insert(p);
    }

    @Override
    public void deleteProduct(Product p) {
        pr.delete(p);
    }

    @Override
    public List<Product> findAll() {
        return pr.findAll();
    }

    @Override
    public Product findById(int id) {
        return pr.findById(id);
    }

    @Override
    public boolean updateProduct(Product p) {
        if(pr.findById(p.getId())!=null){
            pr.save(p);
            return true;
        }else{
            return false;
        }
    }


}
