package com.team10.carinsuranceportalservice.repository;

import com.team10.carinsuranceportalservice.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String name);
}
