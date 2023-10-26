package com.team10.carinsuranceportalservice.service;

import com.team10.carinsuranceportalservice.dto.SignUpDto;
import com.team10.carinsuranceportalservice.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User save(SignUpDto signUpDto);
}
