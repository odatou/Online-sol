package com.solpay.controller;

import com.solpay.dto.GroupeSolDTO;
import com.solpay.entity.GroupeSol;
import com.solpay.service.GroupeSolService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/groupes")
@CrossOrigin("*")
public class GroupeSolController {


    private final GroupeSolService service;


    public GroupeSolController(GroupeSolService service) {

        this.service = service;

    }


    @PostMapping
    public ResponseEntity<GroupeSol> create(
            @RequestBody GroupeSolDTO dto
    ) {

        GroupeSol groupe = service.create(dto);

        return ResponseEntity.ok(groupe);

    }


    @GetMapping
    public ResponseEntity<List<GroupeSol>> findAll() {

        return ResponseEntity.ok(service.findAll());

    }


    @GetMapping("/{id}")
    public ResponseEntity<GroupeSol> findById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(service.findById(id));

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(
            @PathVariable Long id
    ) {

        service.delete(id);

        return ResponseEntity.ok("Groupe supprimé");

    }

}