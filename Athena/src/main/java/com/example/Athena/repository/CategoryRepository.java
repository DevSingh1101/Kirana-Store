package com.example.Athena.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Athena.model.Category;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

}
