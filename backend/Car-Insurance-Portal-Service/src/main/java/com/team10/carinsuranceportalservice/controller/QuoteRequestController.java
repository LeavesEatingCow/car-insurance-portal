package com.team10.carinsuranceportalservice.controller;

import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import com.team10.carinsuranceportalservice.entity.User;
import com.team10.carinsuranceportalservice.service.impl.QuoteRequestServiceImpl;
import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quote-requests")
public class QuoteRequestController {
    private final QuoteRequestServiceImpl quoteRequestService;

    public QuoteRequestController(QuoteRequestServiceImpl quoteRequestService) {
        this.quoteRequestService = quoteRequestService;
    }

    @PostMapping
    public ResponseEntity<QuoteRequest> createQuoteRequest(@RequestBody QuoteRequest quoteRequest) {
        String userEmail = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail();
        QuoteRequest savedRequest = quoteRequestService.createQuoteRequest(quoteRequest, userEmail);
        return ResponseEntity.ok(savedRequest);
    }

    @PostMapping("/{quoteRequestId}/send")
    public ResponseEntity<?> sendQuoteRequest(@PathVariable Integer quoteRequestId, @RequestBody List<Integer> agencyIds) throws MessagingException {
        quoteRequestService.sendQuoteRequest(quoteRequestId, agencyIds);
        return ResponseEntity.ok("Quote requests sent successfully");
    }
}
