package com.team10.carinsuranceportalservice.repository;

import com.team10.carinsuranceportalservice.entity.InsuranceAgency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsuranceAgencyRepository extends JpaRepository<InsuranceAgency, Integer> {
}
