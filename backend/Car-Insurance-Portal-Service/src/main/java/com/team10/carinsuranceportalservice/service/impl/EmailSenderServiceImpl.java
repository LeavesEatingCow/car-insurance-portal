package com.team10.carinsuranceportalservice.service.impl;

import com.team10.carinsuranceportalservice.service.EmailSenderService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderServiceImpl implements EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;
    @Override
    public void sendEmail(String replyTo, String sendTo, String body, String subject) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

        mimeMessageHelper.setReplyTo(replyTo);
        mimeMessageHelper.setTo(sendTo);
        mimeMessageHelper.setText(body);
        mimeMessageHelper.setSubject(subject);

        mailSender.send(mimeMessage);
        System.out.println("Mail sent");
    }
}
