package com.solpay.security;


import io.jsonwebtoken.*;

import org.springframework.stereotype.Service;


import java.util.Date;



@Service
public class JwtService {


    private final String SECRET_KEY =
            "ONLINE_SOL_SECRET_KEY_2026";


    public String generateToken(String email){


        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 86400000
                        )
                )

                .signWith(
                        SignatureAlgorithm.HS256,
                        SECRET_KEY
                )

                .compact();

    }



    public String extractEmail(String token){


        return Jwts.parser()

                .setSigningKey(SECRET_KEY)

                .parseClaimsJws(token)

                .getBody()

                .getSubject();

    }



}