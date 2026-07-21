package com.solpay.service;


import com.solpay.dto.LoginDTO;
import com.solpay.backend.dto.RegisterDTO;
import com.solpay.entity.User;
import com.solpay.repository.UserRepository;

import org.springframework.stereotype.Service;


@Service
public class AuthService {


    private final UserRepository userRepository;


    public AuthService(UserRepository userRepository){

        this.userRepository = userRepository;

    }



    public User register(RegisterDTO dto){


        if(userRepository.findByEmail(dto.getEmail()).isPresent()){

            throw new RuntimeException(
                    "Email utilise deja"
            );

        }



        User user = new User();


        user.setNom(dto.getNom());

        user.setEmail(dto.getEmail());

        user.setTelephone(dto.getTelephone());

        user.setPassword(dto.getPassword());



        return userRepository.save(user);

    }





    public User login(LoginDTO dto){


        User user = userRepository
                .findByEmail(dto.getEmail())
                .orElseThrow(
                        () -> new RuntimeException(
                                "Email ou mot de passe incorrect"
                        )
                );



        if(!user.getPassword()
                .equals(dto.getPassword())){


            throw new RuntimeException(
                    "Email ou mot de passe incorrect"
            );

        }



        return user;


    }


}