package com.example.springex.controller;

import com.example.springex.model.Product;
import com.example.springex.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sliit/products")
public class ProductController {

    private ProductService ps;

    @Autowired
    public ProductController(ProductService productService){
        ps = productService;
    }

    @GetMapping("/")
    public List<Product> getAllProducts(){
       return ps.findAll();
    }

    @GetMapping("/{Id}")
    public Product getProductById(@PathVariable int Id){
        return ps.findById(Id);
    }

    @PostMapping("/")
    public ResponseEntity<?> createProduct(@RequestBody Product p){
        ps.createProduct(p);
        return new ResponseEntity<>("Product Added Successfully", HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id){
        ps.deleteProduct(ps.findById(id));
        return new ResponseEntity<>("Product Deleted Successfully",HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<?> updateProduct(@RequestBody Product p){
        if(ps.updateProduct(p)){
            return new ResponseEntity<>("Product Updated Successfully",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Product Not Updated",HttpStatus.BAD_REQUEST);
        }

    }
}
