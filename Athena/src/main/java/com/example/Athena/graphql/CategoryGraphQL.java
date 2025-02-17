package com.example.Athena.graphql;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.example.Athena.model.Category;
import com.example.Athena.service.CategoryService;

@Controller
public class CategoryGraphQL {
    @Autowired
    public CategoryService categoryService;

    @QueryMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @QueryMapping
    public Optional<Category> getCategoryByName(@Argument("name") final String name) {
        return categoryService.getCategoryByName(name);
    }

    @MutationMapping
    public Category createCategory(@Argument("name") final String name) {
        return categoryService.createCategory(name);
    }

    @MutationMapping
    public Category deleteCategory(@Argument("name") final String name) {
        return categoryService.deleteCategory(name);

    }
}
