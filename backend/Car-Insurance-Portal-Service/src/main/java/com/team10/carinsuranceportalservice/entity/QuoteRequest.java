package com.team10.carinsuranceportalservice.entity;

import com.team10.carinsuranceportalservice.entity.enums.CoverageType;
import com.team10.carinsuranceportalservice.entity.enums.PrimaryUse;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Set;

@Entity
@Table(name = "quote_request")
public class QuoteRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotBlank
    private String dateOfBirth;
    @NotBlank
    private String address;
    @NotBlank
    private String gender;
    @NotBlank
    private String maritalStatus;
    @NotBlank
    private String homeownerStatus;
    @NotBlank
    private String vin;
    @NotBlank
    private String carMake;
    @NotBlank
    private String carModel;
    @NotNull
    private int carYear;
    @Enumerated(EnumType.STRING)
    private PrimaryUse primaryUse;
    @NotNull
    private int mileage;
    @NotBlank
    private String numberOfAccidents;
    @NotBlank
    private String addDriverToPolicy;
    @ElementCollection(targetClass = CoverageType.class)
    @CollectionTable(name = "quote_request_coverage", joinColumns = @JoinColumn(name = "quote_request_id"))
    @Column(name = "coverage_type")
    @Enumerated(EnumType.STRING)
    private Set<CoverageType> coverageTypes;

    private String additionalInfo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Integer getQuoteRequestId() {
        return id;
    }

    public void setQuoteRequestId(Integer id) {
        this.id = id;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getHomeownerStatus() {
        return homeownerStatus;
    }

    public void setHomeownerStatus(String homeownerStatus) {
        this.homeownerStatus = homeownerStatus;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getCarMake() {
        return carMake;
    }

    public void setCarMake(String carMake) {
        this.carMake = carMake;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public int getCarYear() {
        return carYear;
    }

    public void setCarYear(int carYear) {
        this.carYear = carYear;
    }

    public PrimaryUse getPrimaryUse() {
        return primaryUse;
    }

    public void setPrimaryUse(PrimaryUse primaryUse) {
        this.primaryUse = primaryUse;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getNumberOfAccidents() {
        return numberOfAccidents;
    }

    public void setNumberOfAccidents(String numberOfAccidents) {
        this.numberOfAccidents = numberOfAccidents;
    }

    public String getAddDriverToPolicy() {
        return addDriverToPolicy;
    }

    public void setAddDriverToPolicy(String addDriverToPolicy) {
        this.addDriverToPolicy = addDriverToPolicy;
    }

    public Set<CoverageType> getCoverageTypes() {
        return coverageTypes;
    }

    public void setCoverageTypes(Set<CoverageType> coverageTypes) {
        this.coverageTypes = coverageTypes;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
