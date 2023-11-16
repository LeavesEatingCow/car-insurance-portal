package com.team10.carinsuranceportalservice.service;

import com.team10.carinsuranceportalservice.entity.InsuranceAgency;
import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import com.team10.carinsuranceportalservice.entity.User;
import com.team10.carinsuranceportalservice.repository.InsuranceAgencyRepository;
import com.team10.carinsuranceportalservice.repository.QuoteRequestRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuoteRequestService {
    @Autowired
    private QuoteRequestRepository quoteRequestRepository;

    @Autowired
    private InsuranceAgencyRepository insuranceAgencyRepository;

    @Autowired
    private EmailSenderService emailSenderService;

    public QuoteRequest createQuoteRequest(QuoteRequest quoteRequest, UUID userId) {
        return quoteRequest;
    }

    public void sendQuoteRequest(Long quoteRequestId, List<Long> agencyIds) throws MessagingException {
        QuoteRequest quoteRequest = quoteRequestRepository.findById(quoteRequestId).orElseThrow();
        List<InsuranceAgency> agencies = insuranceAgencyRepository.findAllById(agencyIds);

        String emailContent = buildEmailContent(quoteRequest);
        for (InsuranceAgency agency : agencies) {
            emailSenderService.sendEmail(quoteRequest.getUser().getEmail(), agency.getEmail(), emailContent, "Insurance Quote Request");
        }
    }

    private String buildEmailContent(QuoteRequest quoteRequest) {
        User user = quoteRequest.getUser();

        StringBuilder emailContent = new StringBuilder();
        emailContent.append("I hope this message finds you well. I am currently in the market for car insurance ")
                    .append("and am interested in learning more about the policies and rates that your company offers. ")
                    .append("Below are the details of my vehicle and my personal information:\n\n");

        emailContent.append("Full Name: ").append(user.getFirstName()).append(" ").append(user.getLastName()).append("\n")
                    .append("Phone Number: ").append(user.getPhoneNumber()).append("\n")
                    .append("Location: ").append(quoteRequest.getAddress()).append("\n")
                    .append("Vehicle Make: ").append(quoteRequest.getCarMake()).append("\n")
                    .append("Vehicle Model: ").append(quoteRequest.getCarModel()).append("\n")
                    .append("Vehicle Year: ").append(quoteRequest.getCarYear()).append("\n")
                    .append("Primary Use of Vehicle: "); // Add a way to get this information from quoteRequest

        // Conditional content
        String primaryUse = getPrimaryUse(quoteRequest); // Implement this method based on how you store this information
        if (primaryUse != null && !primaryUse.isEmpty()) {
            emailContent.append(primaryUse);
        } else {
            emailContent.append("e.g., Commuting to work, personal use, business use");
        }

        emailContent.append("\nEstimated Annual Mileage: ").append(quoteRequest.getMileage()).append("\n")
                .append("Current Insurance Status: "); // Add a way to get this information from quoteRequest

        // More conditional content
        String insuranceStatus = getInsuranceStatus(quoteRequest); // Implement this method
        if (insuranceStatus != null && !insuranceStatus.isEmpty()) {
            emailContent.append(insuranceStatus);
        } else {
            emailContent.append("e.g., Insured, Looking for a new provider, First-time insurance");
        }

        // Specific coverage or service
        String specificInterest = getSpecificInterest(quoteRequest); // Implement this method
        if (specificInterest != null && !specificInterest.isEmpty()) {
            emailContent.append("\n\nI am particularly interested in ").append(specificInterest).append(".");
        }

        emailContent.append("\n\nI would appreciate it if you could provide me with a quote based on the above information ")
                .append("or get me in contact with an agent who could assist me.\n\n")
                .append("Thank you for your time and assistance. I look forward to your prompt response and hope we ")
                .append("can find a policy that suits my requirements.\n\nBest regards,\n")
                .append(user.getFirstName()).append(" ").append(user.getLastName());

        return emailContent.toString();
    }

    // Implement these methods based on how you're storing these details in QuoteRequest
    private String getPrimaryUse(QuoteRequest quoteRequest) {
        return null;
    }

    private String getInsuranceStatus(QuoteRequest quoteRequest) {
        return null;
    }

    private String getSpecificInterest(QuoteRequest quoteRequest) {
        return null;
    }
}
