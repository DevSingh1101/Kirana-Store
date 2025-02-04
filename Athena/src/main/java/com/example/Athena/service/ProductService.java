package com.example.Athena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Athena.DTO.ProductDTO;
import com.example.Athena.model.Product;
import com.example.Athena.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductsByCategory(String categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public Product createProduct(ProductDTO productDto) {
        Product product = new Product();
        product.setCategoryId(productDto.getCategoryId());
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        product.setUnit(productDto.getUnit());

        return productRepository.save(product);
    }

    public void deleteCategory(String id) {
        productRepository.deleteById(id);
    }
}
