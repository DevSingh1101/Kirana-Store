package com.example.Athena.security.dto.Product;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class CreateProduct {
    private String categoryId;
    private String name;
    private double price;
    private double quantity;
    private String unit;
}
