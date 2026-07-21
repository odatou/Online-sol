package com.solpay.repository;

import com.solpay.entity.Paiement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaiementRepository extends JpaRepository<Paiement, Long> {

    List<Paiement> findByUserId(Long userId);

    List<Paiement> findByGroupeSolId(Long groupeSolId);

    long countByUserIdAndStatut(
            Long userId,
            String statut
    );

    @Query("""
            SELECT COALESCE(SUM(p.montant),0)
            FROM Paiement p
            WHERE p.user.id = :userId
            AND p.statut = 'PAYE'
            """)
    Double getTotalCotise(
            @Param("userId") Long userId
    );

}