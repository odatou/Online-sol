package com.solpay.dto;

import lombok.Data;


@Data
public class ProfileDTO {


    private Long id;


    private String nom;


    private String email;


    private String telephone;


    private Double totalCotise;


    private Long paiementsValides;


    private Long paiementsEnAttente;


    private Long nombreGroupes;


}