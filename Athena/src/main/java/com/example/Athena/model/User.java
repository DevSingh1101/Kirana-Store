package com.example.Athena.model;

import jakarta.annotation.Generated;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String id;

    private String name;

    @Indexed(unique = true)
    private String phoneNumber;

    private ROLE userRole;

    private boolean isValidated;

    public User(final String name, final String phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.isValidated = false;
        this.userRole = ROLE.CUSTOMER;
    }
}


