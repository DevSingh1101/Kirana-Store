package com.example.Athena.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private String categoryId;
    private String name;
    private double price;
    private double quantity;
    private String unit;
}
