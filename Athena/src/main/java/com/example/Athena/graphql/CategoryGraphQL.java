package com.example.Athena.graphql;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.example.Athena.model.Category;
import com.example.Athena.service.CategoryService;

@Controller
public class CategoryGraphQL {
    @Autowired
    private CategoryService categoryService;

    @QueryMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @MutationMapping
    public Category createCategory(@Argument("name") String name) {
        return categoryService.createCategory(new Category(null, name));
    }
}
