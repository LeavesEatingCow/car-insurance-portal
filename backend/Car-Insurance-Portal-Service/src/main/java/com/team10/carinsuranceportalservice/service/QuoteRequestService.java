package com.team10.carinsuranceportalservice.service;

import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import jakarta.mail.MessagingException;

import java.util.List;

public interface QuoteRequestService {
    QuoteRequest createQuoteRequest(QuoteRequest quoteRequest, String userEmail);
    void sendQuoteRequest(Integer quoteRequestId, List<Integer> agencyIds) throws MessagingException;
}
