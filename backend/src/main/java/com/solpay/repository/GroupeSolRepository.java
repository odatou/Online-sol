package com.solpay.repository;


import com.solpay.entity.GroupeSol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GroupeSolRepository
        extends JpaRepository<GroupeSol, Long> {



}