package com.solpay.controller;


import com.solpay.dto.ParticipationDTO;
import com.solpay.entity.Participation;
import com.solpay.service.ParticipationService;


import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/api/participations")
@CrossOrigin(origins = "http://localhost:5173")
public class ParticipationController {



    private final ParticipationService service;



    public ParticipationController(
            ParticipationService service
    ){

        this.service = service;

    }






    // Ajouter yon moun nan yon groupe
    @PostMapping
    public Participation create(
            @RequestBody ParticipationDTO dto
    ){

        return service.create(dto);

    }



    // Tout participations
    @GetMapping
    public List<Participation> findAll(){

        return service.findAll();

    }


    // Lis membre yon groupe
    @GetMapping("/groupe/{groupeId}")
    public List<Participation> findByGroupe(
            @PathVariable Long groupeId
    ){

        return service.findByGroupe(groupeId);

    }








    // Lis groupe yon user ladan
    @GetMapping("/user/{userId}")
    public List<Participation> findByUser(
            @PathVariable Long userId
    ){

        return service.findByUser(userId);

    }







    @PostMapping("/join")
    public Participation joinGroup(
            @RequestParam String email,
            @RequestParam Long groupeId
    ){

        return service.joinGroup(
                email,
                groupeId
        );

    }







    // Supprime yon participation
    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id
    ){

        service.delete(id);

    }


}