package com.solpay.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Entity
@Data
@Table(name = "paiements")
public class Paiement {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(nullable = false)
    private Double montant;



    private String methodePaiement;



    private String statut;



    private LocalDateTime datePaiement = LocalDateTime.now();




    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;




    @ManyToOne
    @JoinColumn(name = "groupe_id", nullable = false)
    private GroupeSol groupeSol;



}