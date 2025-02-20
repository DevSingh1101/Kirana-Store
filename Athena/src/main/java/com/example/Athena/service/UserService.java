package com.example.Athena.service;

import com.example.Athena.model.User;
import com.example.Athena.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(final String name, final String phoneNumber) {
        final Optional<User> user = userRepository.findByPhoneNumber(phoneNumber);

        return user.orElseGet(() -> userRepository.save(new User(name, phoneNumber)));

    }

    public boolean validateUser(final String phoneNumber, final String otp) {
        return true;
    }

    public void deleteUser(final String id) {
        userRepository.deleteById(id);
    }

    public String generateOtp(String phoneNumber, String userName) {
        try {
            final String input = phoneNumber + userName;

            final MessageDigest digest = MessageDigest.getInstance("SHA-256");
            final byte[] hash = digest.digest(input.getBytes(StandardCharsets.UTF_8));

            final int otp = Math.abs(new Random(hash[0]).nextInt(1000000));

            return String.format("%06d", otp);
        } catch (Exception e) {
            throw new RuntimeException("Error generating OTP", e);
        }
    }
}
