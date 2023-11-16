package com.team10.carinsuranceportalservice.repository;

import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface QuoteRequestRepository extends JpaRepository<QuoteRequest, Long> {
    List<QuoteRequest> findByUserId(UUID userId);
}
