package com.solpay.controller;


import com.solpay.dto.PaiementDTO;
import com.solpay.service.PaiementService;
import java.util.List;
import com.solpay.entity.Paiement;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/paiements")
@CrossOrigin("*")
public class PaiementController {



    private final PaiementService service;



    public PaiementController(
            PaiementService service
    ){

        this.service = service;

    }



    @PostMapping
    public Object payer(
            @RequestBody PaiementDTO dto
    ){

        return service.create(dto);

    }



    @GetMapping
    public Object getPayments(){

        return service.findAll();

    }



    @GetMapping("/history")
    public List<Paiement> history(){

        return service.history();

    }

    @PutMapping("/{id}/valider")
    public Object valider(
            @PathVariable Long id
    ){

        return service.validerPaiement(id);

    }




}