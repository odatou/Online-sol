package com.solpay.dto;


import lombok.Data;


import java.time.LocalDate;



@Data
public class GroupeSolDTO {


    private String nom;


    private Double montantCotisation;


    private String frequence;


    private LocalDate dateDebut;
    private LocalDate dateFin;

    private Integer nombreMembres;


    private Double penaliteRetard;

    private Double montantTotal;

}