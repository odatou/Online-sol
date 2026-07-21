package com.solpay.service;


import com.solpay.dto.PaiementDTO;
import com.solpay.entity.GroupeSol;
import com.solpay.entity.Paiement;
import com.solpay.entity.User;

import com.solpay.repository.GroupeSolRepository;
import com.solpay.repository.PaiementRepository;
import com.solpay.repository.ParticipationRepository;
import com.solpay.repository.UserRepository;


import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class PaiementService {



    private final PaiementRepository repository;

    private final UserRepository userRepository;

    private final GroupeSolRepository groupeRepository;

    private final ParticipationRepository participationRepository;






    public PaiementService(

            PaiementRepository repository,

            UserRepository userRepository,

            GroupeSolRepository groupeRepository,

            ParticipationRepository participationRepository

    ){


        this.repository = repository;

        this.userRepository = userRepository;

        this.groupeRepository = groupeRepository;

        this.participationRepository = participationRepository;


    }







    public Paiement create(PaiementDTO dto){



        // Verifye si moun nan se manm groupe a

        boolean exists = participationRepository
                .existsByUserIdAndGroupeSolId(

                        dto.getUserId(),

                        dto.getGroupeSolId()

                );




        if(!exists){


            throw new RuntimeException(

                    "Ou pa manm nan groupe sa"

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









        Paiement paiement = new Paiement();




        paiement.setMontant(

                dto.getMontant()

        );





        paiement.setMethodePaiement(

                dto.getMethodePaiement()

        );





        // Lè moun fè paiement li rete an attente

        paiement.setStatut(

                "EN_ATTENTE"

        );






        paiement.setUser(

                user

        );





        paiement.setGroupeSol(

                groupe

        );







        return repository.save(paiement);



    }










    public List<Paiement> findAll(){


        return repository.findAll();


    }









    public List<Paiement> history(){


        return repository.findAll();


    }









    public Paiement validerPaiement(Long id){



        Paiement paiement = repository.findById(id)

                .orElseThrow(

                        () -> new RuntimeException(

                                "Paiement introuvable"

                        )

                );





        paiement.setStatut(

                "PAYE"

        );





        return repository.save(paiement);



    }

    public Paiement findById(Long id){

        return repository.findById(id)

                .orElseThrow(

                        () -> new RuntimeException(
                                "Paiement introuvable"
                        )

                );

    }

    public Double totalPaiementUser(Long userId){

        List<Paiement> paiements = repository.findByUserId(userId);


        return paiements.stream()
                .filter(p -> p.getStatut().equals("PAYE"))
                .mapToDouble(Paiement::getMontant)
                .sum();

    }








}