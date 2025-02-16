package com.example.Athena.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document(collection = "categories")
@Getter
@Setter
public class Category {
    @Id
    private String id;
    private String name;

    public Category(final String name) {
        this.name = name;
    }
}
