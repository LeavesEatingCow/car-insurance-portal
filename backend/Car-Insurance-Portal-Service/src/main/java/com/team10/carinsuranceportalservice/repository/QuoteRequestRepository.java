package com.team10.carinsuranceportalservice.repository;

import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuoteRequestRepository extends JpaRepository<QuoteRequest, Integer> {
    List<QuoteRequest> findByUserId(Integer userId);
}
