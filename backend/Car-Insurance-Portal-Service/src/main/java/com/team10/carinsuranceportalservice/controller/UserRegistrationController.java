package com.team10.carinsuranceportalservice.controller;

import com.team10.carinsuranceportalservice.dto.JwtAuthenticationResponse;
import com.team10.carinsuranceportalservice.dto.LoginDto;
import com.team10.carinsuranceportalservice.dto.SignUpDto;
import com.team10.carinsuranceportalservice.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserRegistrationController {
    private final AuthenticationService authenticationService;

    public UserRegistrationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> logInUser(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(authenticationService.login(loginDto));
    }

    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> registerUser(@RequestBody SignUpDto signUpDto) {
        return ResponseEntity.ok(authenticationService.signup(signUpDto));
    }
}
