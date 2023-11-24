package com.team10.carinsuranceportalservice.service.impl;

import com.team10.carinsuranceportalservice.entity.InsuranceAgency;
import com.team10.carinsuranceportalservice.entity.QuoteRequest;
import com.team10.carinsuranceportalservice.entity.User;
import com.team10.carinsuranceportalservice.entity.enums.CoverageType;
import com.team10.carinsuranceportalservice.entity.enums.PrimaryUse;
import com.team10.carinsuranceportalservice.repository.InsuranceAgencyRepository;
import com.team10.carinsuranceportalservice.repository.QuoteRequestRepository;
import com.team10.carinsuranceportalservice.repository.UserRepository;
import com.team10.carinsuranceportalservice.service.QuoteRequestService;
import jakarta.mail.MessagingException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteRequestServiceImpl implements QuoteRequestService {
    private final UserRepository userRepository;
    private final QuoteRequestRepository quoteRequestRepository;
    private final InsuranceAgencyRepository insuranceAgencyRepository;
    private final EmailSenderServiceImpl emailSenderService;

    public QuoteRequestServiceImpl(UserRepository userRepository, QuoteRequestRepository quoteRequestRepository, InsuranceAgencyRepository insuranceAgencyRepository, EmailSenderServiceImpl emailSenderService) {
        this.userRepository = userRepository;
        this.quoteRequestRepository = quoteRequestRepository;
        this.insuranceAgencyRepository = insuranceAgencyRepository;
        this.emailSenderService = emailSenderService;
    }

    @Override
    public QuoteRequest getQuoteRequestById(Integer quoteRequestId) {
        return quoteRequestRepository.findById(quoteRequestId).orElse(null);
    }

    @Override
    public QuoteRequest createQuoteRequest(QuoteRequest quoteRequest, String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + userEmail);
        }
        quoteRequest.setUser(user);
        return quoteRequestRepository.save(quoteRequest);
    }

    @Override
    public void sendQuoteRequest(Integer quoteRequestId, List<Integer> agencyIds) throws MessagingException {
        QuoteRequest quoteRequest = quoteRequestRepository.findById(quoteRequestId).orElseThrow();
        List<InsuranceAgency> agencies = insuranceAgencyRepository.findAllById(agencyIds);

        String emailContent = buildEmailContent(quoteRequest);
        for (InsuranceAgency agency : agencies) {
            emailSenderService.sendEmail(quoteRequest.getUser().getEmail(), agency.getEmail(), emailContent, "RapidInsure Insurance Quote Request");
        }
    }

    public String buildEmailContent(QuoteRequest quoteRequest) {
        User user = quoteRequest.getUser();

        StringBuilder emailContent = new StringBuilder();
        emailContent.append("Hello. This email was generated by a RapidInsure client who is ")
                .append("interested in learning more about the policies and rates that your company offers. ")
                .append("Below are the details of their vehicle and personal information:\n\n");

        emailContent.append("Full Name: ").append(user.getFirstName()).append(" ").append(user.getLastName()).append("\n")
                .append("Phone Number: ").append(user.getPhoneNumber()).append("\n")
                .append("Location: ").append(quoteRequest.getAddress()).append("\n")
                .append("Date of Birth: ").append(quoteRequest.getDateOfBirth()).append("\n")
                .append("Gender: ").append(quoteRequest.getGender()).append("\n")
                .append("Marital Status: ").append(quoteRequest.getMartialStatus()).append("\n")
                .append("Homeowner? ").append(quoteRequest.getHomeownerStatus()).append("\n")
                .append("Number of Accidents in Past 3 Years: ").append(quoteRequest.getNumberOfAccidents()).append("\n")
                .append("Add driver to policy? ").append(quoteRequest.getAddDriverToPolicy()).append("\n\n");

        emailContent.append("Vehicle Make: ").append(quoteRequest.getCarMake()).append("\n")
                .append("Vehicle Model: ").append(quoteRequest.getCarModel()).append("\n")
                .append("Vehicle Year: ").append(quoteRequest.getCarYear()).append("\n")
                .append("Vehicle Mileage: ").append(quoteRequest.getMileage()).append("\n")
                .append("VIN Number: ").append(quoteRequest.getVin()).append("\n")
                .append("Primary Use of Vehicle: ").append(getPrimaryUse(quoteRequest)).append("\n\n");

        if (quoteRequest.getCoverageTypes() != null && !quoteRequest.getCoverageTypes().isEmpty()) {
            emailContent.append("\nRequested Coverage Types:\n");
            for (CoverageType coverageType : quoteRequest.getCoverageTypes()) {
                emailContent.append("- ").append(coverageType.name()).append("\n");
            }
        }

        String additionalInfo = additionalInfo(quoteRequest);
        if (additionalInfo != null && !additionalInfo.isEmpty()) {
            emailContent.append("\n\nAdditional Info: ").append(additionalInfo).append(".");
        }

        emailContent.append("\n\nPlease provide this user with a quote based on the above information ")
                .append("or get them in contact with an agent who could assist them.\n\n")
                .append("Thank you for your time and assistance. ")
                .append("\n\nBest regards,\n")
                .append("RapidInsure");

        return emailContent.toString();
    }

    private String getPrimaryUse(QuoteRequest quoteRequest) {
        if (quoteRequest.getPrimaryUse() == PrimaryUse.PERSONAL) {
            return "personal use";
        }
        return "commercial use";
    }

    private String additionalInfo(QuoteRequest quoteRequest) {
        return quoteRequest.getAdditionalInfo();
    }
}
