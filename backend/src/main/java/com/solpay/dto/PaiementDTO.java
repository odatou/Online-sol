package com.solpay.dto;


import lombok.Data;



@Data
public class PaiementDTO {


    private Double montant;


    private String methodePaiement;


    private Long userId;


    private Long groupeSolId;


}