package com.solpay.entity;


import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDateTime;



@Entity
@Data
public class Notification {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private String message;



    private boolean lu = false;



    private LocalDateTime dateCreation =
            LocalDateTime.now();




    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



}