package com.example.Athena.controller;

import com.example.Athena.model.User;
import com.example.Athena.security.dto.User.CreateUser;
import com.example.Athena.security.dto.User.ValidateUser;
import com.example.Athena.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserAuth {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User login(final CreateUser input) {
        return userService.saveUser(input.getName(), input.getPhoneNumber());
    }

    @PostMapping("/validate")
    public Boolean validate(final ValidateUser input) {
        return userService.validateUser(input.getPhoneNumber(), input.getOtp());
    }

    @DeleteMapping("/delete")
    public boolean delete(final String id) {
        userService.deleteUser(id);
        return true;
    }
}
