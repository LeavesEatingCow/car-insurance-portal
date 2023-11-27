package com.team10.carinsuranceportalservice.service.impl;

import com.team10.carinsuranceportalservice.dto.JwtAuthenticationResponse;
import com.team10.carinsuranceportalservice.dto.LoginDto;
import com.team10.carinsuranceportalservice.dto.SignUpDto;
import com.team10.carinsuranceportalservice.entity.enums.Role;
import com.team10.carinsuranceportalservice.entity.User;
import com.team10.carinsuranceportalservice.repository.UserRepository;
import com.team10.carinsuranceportalservice.service.AuthenticationService;
import com.team10.carinsuranceportalservice.service.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public AuthenticationServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public JwtAuthenticationResponse signup(SignUpDto signUpDto) {
        User user = new User();
        user.setFirstName(signUpDto.getFirstName());
        user.setLastName(signUpDto.getLastName());
        user.setPhoneNumber(signUpDto.getPhoneNumber());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);

        JwtAuthenticationResponse jwtResponse = new JwtAuthenticationResponse();
        String jwt = jwtService.generateToken(user);

        jwtResponse.setToken(jwt);
        return jwtResponse;
    }

    @Override
    public JwtAuthenticationResponse login(LoginDto loginDto) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        User user = userRepository.findByEmail(loginDto.getEmail());

        JwtAuthenticationResponse jwtResponse = new JwtAuthenticationResponse();
        String jwt = jwtService.generateToken(user);

        jwtResponse.setToken(jwt);
        return jwtResponse;
    }
}
