package com.solpay.service;
import com.solpay.dto.GroupeSolDTO;


import com.solpay.entity.GroupeSol;
import com.solpay.repository.GroupeSolRepository;

import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class GroupeSolService {



    private final GroupeSolRepository repository;



    public GroupeSolService(
            GroupeSolRepository repository
    ){

        this.repository = repository;

    }



    public GroupeSol create(
            GroupeSolDTO dto
    ){


        GroupeSol groupe = new GroupeSol();


        groupe.setNom(dto.getNom());
        groupe.setMontantCotisation(dto.getMontantCotisation());
        groupe.setFrequence(dto.getFrequence());

        groupe.setDateDebut(dto.getDateDebut());


        if(dto.getDateDebut() != null){

            groupe.setDateFin(
                    dto.getDateDebut().plusMonths(3)
            );

        }
        groupe.setNombreMembres(dto.getNombreMembres());
        if(dto.getNombreMembres() != null && dto.getMontantCotisation() != null){

            groupe.setMontantTotal(
                    dto.getMontantCotisation() * dto.getNombreMembres()
            );

        }
        groupe.setPenaliteRetard(dto.getPenaliteRetard());

        return repository.save(groupe);

    }




    public List<GroupeSol> findAll(){

        return repository.findAll();

    }



    public GroupeSol findById(Long id){

        return repository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Groupe introuvable"
                        )
                );

    }



    public void delete(Long id){

        repository.deleteById(id);

    }


}