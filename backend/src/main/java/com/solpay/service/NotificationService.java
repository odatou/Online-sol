package com.solpay.service;


import com.solpay.entity.Notification;
import com.solpay.repository.NotificationRepository;

import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class NotificationService {



    private final NotificationRepository repository;



    public NotificationService(
            NotificationRepository repository
    ){

        this.repository = repository;

    }




    public List<Notification> findAll(){

        return repository.findAll();

    }


}