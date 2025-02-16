package com.example.Athena.security.dto.User;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class CreateUser {
    private String name;
    private String phoneNumber;
}
