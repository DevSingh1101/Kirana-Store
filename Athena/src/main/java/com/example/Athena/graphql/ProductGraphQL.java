package com.example.Athena.graphql;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.example.Athena.DTO.ProductDTO;
import com.example.Athena.model.Product;
import com.example.Athena.service.ProductService;

@Controller
public class ProductGraphQL {
    @Autowired
    private ProductService productService;

    @QueryMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @QueryMapping
    public List<Product> getProductByCategoryId(@Argument("categoryId") String categoryId) {
        return productService.getProductsByCategoryId(categoryId);
    }

    // @QueryMapping
    // public List<Product> getProductByCategoryName(@Argument("categoryName")
    // String name) {
    // return productService.getProductsByCategoryName(name);
    // }

    @MutationMapping
    public Product createProduct(@Argument("input") ProductDTO input) {
        return productService.createProduct(input);
    }
}
