package com.team10.carinsuranceportalservice.service;

import jakarta.mail.MessagingException;

public interface EmailSenderService {
    void sendEmail(String replyTo, String sendTo, String body, String subject) throws MessagingException;
}
