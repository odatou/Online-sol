package com.solpay.controller;

import com.solpay.dto.LoginDTO;
import com.solpay.backend.dto.RegisterDTO;
import com.solpay.service.AuthService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {


    private final AuthService authService;


    public AuthController(AuthService authService){
        this.authService = authService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterDTO dto
    ){

        return ResponseEntity.ok(
                authService.register(dto)
        );

    }



    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginDTO dto
    ){

        return ResponseEntity.ok(
                authService.login(dto)
        );

    }

}