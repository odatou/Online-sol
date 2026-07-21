package com.solpay.service;


import com.solpay.dto.ParticipationDTO;
import com.solpay.entity.GroupeSol;
import com.solpay.entity.Participation;
import com.solpay.entity.User;

import com.solpay.repository.GroupeSolRepository;
import com.solpay.repository.ParticipationRepository;
import com.solpay.repository.UserRepository;


import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class ParticipationService {



    private final ParticipationRepository repository;

    private final UserRepository userRepository;

    private final GroupeSolRepository groupeRepository;




    public ParticipationService(
            ParticipationRepository repository,
            UserRepository userRepository,
            GroupeSolRepository groupeRepository
    ){

        this.repository = repository;
        this.userRepository = userRepository;
        this.groupeRepository = groupeRepository;

    }





    // Ajouter participation ak DTO
    public Participation create(ParticipationDTO dto){


        if(repository.existsByUserIdAndGroupeSolId(
                dto.getUserId(),
                dto.getGroupeSolId()
        )){

            throw new RuntimeException(
                    "Vous etes deja dans le groupe !"
            );

        }



        User user = userRepository.findById(
                        dto.getUserId()
                )
                .orElseThrow(
                        () -> new RuntimeException(
                                "Utilisateur introuvable"
                        )
                );




        GroupeSol groupe = groupeRepository.findById(
                        dto.getGroupeSolId()
                )
                .orElseThrow(
                        () -> new RuntimeException(
                                "Groupe introuvable"
                        )
                );




        Participation participation = new Participation();


        participation.setUser(user);

        participation.setGroupeSol(groupe);

        participation.setRole("MEMBRE");

        participation.setStatut("ACTIF");



        return repository.save(participation);

    }







    // Rejoindre groupe ak email
    public Participation joinGroup(
            String email,
            Long groupeId
    ){


        User user = userRepository.findByEmail(email)

                .orElseThrow(
                        () -> new RuntimeException(
                                "Utilisateur introuvable"
                        )
                );




        if(repository.existsByUserIdAndGroupeSolId(
                user.getId(),
                groupeId
        )){

            throw new RuntimeException(
                    "Vous etes deja dans le groupe !"
            );

        }




        GroupeSol groupe = groupeRepository.findById(groupeId)

                .orElseThrow(
                        () -> new RuntimeException(
                                "Groupe introuvable"
                        )
                );





        Participation participation = new Participation();


        participation.setUser(user);

        participation.setGroupeSol(groupe);

        participation.setRole("MEMBRE");

        participation.setStatut("ACTIF");



        return repository.save(participation);


    }







    // Groupe yon user ladan
    public List<Participation> findByUser(Long userId){

        return repository.findByUserId(userId);

    }







    // Membre yon groupe
    public List<Participation> findByGroupe(Long id){

        return repository.findByGroupeSolId(id);

    }
    public List<Participation> findAll(){

        return repository.findAll();

    }




    // Supprime membre
    public void delete(Long id){


        Participation participation = repository.findById(id)

                .orElseThrow(
                        () -> new RuntimeException(
                                "Participation introuvable"
                        )
                );


        repository.delete(participation);


    }




}