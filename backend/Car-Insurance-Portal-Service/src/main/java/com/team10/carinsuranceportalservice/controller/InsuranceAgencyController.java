package com.team10.carinsuranceportalservice.controller;

import com.team10.carinsuranceportalservice.entity.InsuranceAgency;
import com.team10.carinsuranceportalservice.repository.InsuranceAgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/insurance-agencies")
public class InsuranceAgencyController {
    private final InsuranceAgencyRepository insuranceAgencyRepository;

    @Autowired
    public InsuranceAgencyController(InsuranceAgencyRepository insuranceAgencyRepository) {
        this.insuranceAgencyRepository = insuranceAgencyRepository;
    }

    @GetMapping
    public ResponseEntity<List<InsuranceAgency>> getAllInsuranceAgencies() {
        List<InsuranceAgency> agencies = insuranceAgencyRepository.findAll();
        return ResponseEntity.ok(agencies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InsuranceAgency> getInsuranceAgencyById(@PathVariable Integer id) {
        Optional<InsuranceAgency> agency = insuranceAgencyRepository.findById(id);
        if (!agency.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(agency.get());
    }
}
