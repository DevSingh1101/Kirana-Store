package com.example.Athena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Athena.model.Category;
import com.example.Athena.model.Product;
import com.example.Athena.repository.CategoryRepository;
import com.example.Athena.repository.ProductRepository;
import com.example.Athena.security.dto.Product.CreateProduct;

@Service
public class ProductService {
    @Autowired
    public ProductRepository productRepository;

    @Autowired
    public CategoryRepository categoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(final String id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductsByCategoryId(final String categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    // public List<Product> getProductsByCategoryName(String name) {
    // return productRepository.findByCategory(Example.of(new Category(null, name)))
    // }

    public Product createProduct(final CreateProduct productDto) {
        final String categoryId = productDto.getCategoryId();
        Optional<Category> category = categoryRepository.findById(categoryId);

        if (category.isEmpty()) {
            return null;
        }

        Product product = new Product();
        product.setCategory(category.get());
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setQuantity(productDto.getQuantity());
        product.setUnit(productDto.getUnit());

        return productRepository.save(product);
    }

    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}
