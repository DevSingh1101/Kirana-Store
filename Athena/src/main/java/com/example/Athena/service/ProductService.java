package com.example.Athena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.example.Athena.DTO.ProductDTO;
import com.example.Athena.model.Category;
import com.example.Athena.model.Product;
import com.example.Athena.repository.CategoryRepository;
import com.example.Athena.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductsByCategoryId(String categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    // public List<Product> getProductsByCategoryName(String name) {
    // return productRepository.findByCategory(Example.of(new Category(null, name)))
    // }

    public Product createProduct(ProductDTO productDto) {
        final String categoryId = productDto.getCategoryId();
        Optional<Category> category = categoryRepository.findById(categoryId);

        if (!category.isPresent()) {
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

    public void deleteCategory(String id) {
        productRepository.deleteById(id);
    }
}
