package com.team10.carinsuranceportalservice.service.impl;

import com.team10.carinsuranceportalservice.dto.SignUpDto;
import com.team10.carinsuranceportalservice.entity.Role;
import com.team10.carinsuranceportalservice.entity.User;
import com.team10.carinsuranceportalservice.repository.UserRepository;
import com.team10.carinsuranceportalservice.service.UserService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }

    @Override
    public User save(SignUpDto signUpDto) {
        User user = new User();
        user.setFirstName(signUpDto.getFirstName());
        user.setLastName(signUpDto.getLastName());
        user.setEmail(signUpDto.getEmail());
        user.setPhoneNumber(signUpDto.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));

        List<Role> roles = new ArrayList<>();
        Role role = new Role();
        role.setName("ROLE_USER");
        roles.add(role);
        user.setRoles(roles);

        return userRepository.save(user);
    }

    private Collection< ? extends GrantedAuthority > mapRolesToAuthorities(Collection < Role > roles) {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}