package com.example.Athena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.example.Athena.repository.CategoryRepository;
import com.example.Athena.model.Category;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(String id) {
        return categoryRepository.findById(id);
    }

    public Optional<Category> getCategoryByName(String name) {
        final Example<Category> example = Example.of(new Category(name));
        return categoryRepository.findOne(example);
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category deleteCategory(String name) {
        return categoryRepository.deleteByName(name);
    }
}
