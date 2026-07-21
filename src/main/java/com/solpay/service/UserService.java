package com.solpay.service;


import com.solpay.dto.ProfileDTO;
import com.solpay.entity.Paiement;
import com.solpay.entity.User;
import com.solpay.repository.PaiementRepository;
import com.solpay.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {


    private final UserRepository repository;

    private final PaiementRepository paiementRepository;



    public UserService(
            UserRepository repository,
            PaiementRepository paiementRepository
    ){

        this.repository = repository;
        this.paiementRepository = paiementRepository;

    }



    public List<User> getAll(){

        return repository.findAll();

    }



    public User getById(Long id){

        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

    }



    public ProfileDTO getProfile(Long id){


        User user = getById(id);


        List<Paiement> paiements =
                paiementRepository.findByUserId(id);



        ProfileDTO profile = new ProfileDTO();



        profile.setId(user.getId());

        profile.setNom(user.getNom());

        profile.setEmail(user.getEmail());

        profile.setTelephone(user.getTelephone());



        profile.setNombreGroupes(
                user.getParticipations() != null ?
                        (long) user.getParticipations().size()
                        :
                        0L
        );



        long paiementsValides =
                paiements.stream()
                        .filter(p ->
                                "PAYE".equals(p.getStatut())
                        )
                        .count();



        long paiementsEnAttente =
                paiements.stream()
                        .filter(p ->
                                "EN_ATTENTE".equals(p.getStatut())
                        )
                        .count();



        double totalCotise =
                paiements.stream()
                        .filter(p ->
                                "PAYE".equals(p.getStatut())
                        )
                        .mapToDouble(Paiement::getMontant)
                        .sum();



        profile.setPaiementsValides(
                paiementsValides
        );


        profile.setPaiementsEnAttente(
                paiementsEnAttente
        );


        profile.setTotalCotise(
                totalCotise
        );


        return profile;

    }





    public User update(Long id, User user){

        User existing = getById(id);


        existing.setNom(user.getNom());

        existing.setEmail(user.getEmail());

        existing.setTelephone(user.getTelephone());


        return repository.save(existing);

    }





    public void delete(Long id){

        repository.deleteById(id);

    }

}