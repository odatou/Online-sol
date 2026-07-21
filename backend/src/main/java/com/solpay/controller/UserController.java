package com.solpay.controller;
import com.solpay.dto.ProfileDTO;

import com.solpay.entity.User;
import com.solpay.service.UserService;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {


    private final UserService userService;


    public UserController(UserService userService){

        this.userService = userService;

    }



    @GetMapping
    public List<User> getUsers(){

        return userService.getAll();

    }



    @GetMapping("/{id}")
    public ProfileDTO getUser(
            @PathVariable Long id
    ){

        return userService.getProfile(id);

    }



    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User user
    ){

        return userService.update(id, user);

    }



    @DeleteMapping("/{id}")
    public void deleteUser(
            @PathVariable Long id
    ){

        userService.delete(id);

    }

}