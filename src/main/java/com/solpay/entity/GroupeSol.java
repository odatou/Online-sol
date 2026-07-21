package com.solpay.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDate;
import java.util.List;



@Entity
@Data
public class GroupeSol {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    private String nom;



    private Double montantCotisation;



    private String frequence;



    private LocalDate dateDebut;
    private LocalDate dateFin;


    private Integer nombreMembres;



    private Double penaliteRetard;

    private Double montantTotal;
    private String statut = "ACTIF";




    @OneToMany(
            mappedBy = "groupeSol",
            cascade = CascadeType.ALL
    )
    @JsonIgnore
    private List<Participation> participations;



    @OneToMany(
            mappedBy = "groupeSol",
            cascade = CascadeType.ALL
    )
    @JsonIgnore
    private List<Paiement> paiements;



}