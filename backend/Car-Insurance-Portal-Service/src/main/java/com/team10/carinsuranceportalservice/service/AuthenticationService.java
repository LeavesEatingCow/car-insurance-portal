package com.team10.carinsuranceportalservice.service;

import com.team10.carinsuranceportalservice.dto.JwtAuthenticationResponse;
import com.team10.carinsuranceportalservice.dto.LoginDto;
import com.team10.carinsuranceportalservice.dto.SignUpDto;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpDto signUpDto);

    JwtAuthenticationResponse login(LoginDto loginDto);
}
