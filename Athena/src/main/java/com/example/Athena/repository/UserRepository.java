package com.example.Athena.repository;

import com.example.Athena.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByName(String name);
    Optional<User> findByPhoneNumber(String phoneNumber);
}
