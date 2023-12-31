package com.team10.carinsuranceportalservice.repository;

import com.team10.carinsuranceportalservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}
