package com.solpay.repository;


import com.solpay.entity.Participation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;



public interface ParticipationRepository
        extends JpaRepository<Participation, Long> {



    boolean existsByUserIdAndGroupeSolId(
            Long userId,
            Long groupeSolId
    );



    List<Participation> findByUserId(
            Long userId
    );



    List<Participation> findByGroupeSolId(
            Long groupeSolId
    );



}