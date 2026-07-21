package com.solpay.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;



@Entity
@Data
public class Participation {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




    private String role = "MEMBRE";



    private String statut = "ACTIF";



    private LocalDateTime dateParticipation = LocalDateTime.now();





    @ManyToOne
    @JoinColumn(name = "user_id")

    private User user;





    @ManyToOne
    @JoinColumn(name = "groupe_id")
    @JsonIgnore
    private GroupeSol groupeSol;



}