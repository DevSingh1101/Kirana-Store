package com.example.Athena.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtService {
    public static final String SECRET = "21412124121ASDASFASF";

    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignKey()).build()
                .parseClaimsJws(token);
    }

    public String generateToken(String phoneNumber) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, phoneNumber);
    }

    private String createToken(Map<String, Object> claims, String phoneNumber) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(phoneNumber)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*30))
                .signWith(getSignKey()).compact();
    }

    private Key getSignKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET));
    }
}
