package com.solpay.controller;


import com.solpay.service.NotificationService;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/notifications")
@CrossOrigin("*")
public class NotificationController {


    private final NotificationService service;



    public NotificationController(
            NotificationService service
    ){

        this.service = service;

    }



    @GetMapping
    public Object getNotifications(){

        return service.findAll();

    }

}