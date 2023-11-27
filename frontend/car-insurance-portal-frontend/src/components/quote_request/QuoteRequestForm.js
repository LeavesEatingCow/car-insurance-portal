import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./QuoteRequestForm.css";
import Navbar from "../shared_components/Navbar";
import {jwtDecode} from "jwt-decode";

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    address: '',
    gender: '',
    maritalStatus: '',
    homeownerStatus: '',
    carMake: '',
    carModel: '',
    carYear: '',
    vin: '',
    mileage: '',
    primaryUse: '',
    numberOfAccidents: '',
    addDriverToPolicy: '',
    coverageTypes: [],
    additionalInfo: '',
    selectedAgencies: [],
  });

  const [insuranceAgencies, setInsuranceAgencies] = useState([]);
  const [dateType, setDateType] = useState("text");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('/api/insurance-agencies', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setInsuranceAgencies(response.data);
      } catch (error) {
        console.error("Error fetching insurance agencies", error);
      }
    };

    fetchAgencies();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "coverageTypes") {
      setFormData(prev => ({
        ...prev,
        coverageTypes: checked
          ? [...prev.coverageTypes, value]
          : prev.coverageTypes.filter(type => type !== value)
      }));
    } else if (name === "selectedAgencies") {
      setFormData(prev => ({
        ...prev,
        selectedAgencies: checked
          ? [...prev.selectedAgencies, value]
          : prev.selectedAgencies.filter(id => id !== value)
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    const minYear = 1960;
    const maxYear = 2024;

    if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
    if (!formData.address) errors.address = "Address is required";
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.maritalStatus) errors.maritalStatus = 'Marital status is required';
    if (!formData.homeownerStatus) errors.homeownerStatus = 'Homeowner status is required';
    if (!formData.carMake) errors.carMake = 'Car make is required';
    if (!formData.carModel) errors.carModel = 'Car model is required';
    if (!formData.primaryUse) errors.primaryUse = 'Primary use is required';
    if (!formData.numberOfAccidents) errors.numberOfAccidents = 'Number of accidents is required';
    if (!formData.addDriverToPolicy) errors.addDriverToPolicy = 'Driver policy decision is required';
    if (formData.coverageTypes.length === 0) errors.coverageTypes = 'Please select at least one coverage type';
    if (formData.selectedAgencies.length === 0) errors.selectedAgencies = 'Please select at least one insurance agency';

    if (!formData.carYear) {
      errors.carYear = 'Car year is required';
    } else {
      const carYearNum = parseInt(formData.carYear, 10);
      if (isNaN(carYearNum) || carYearNum < minYear || carYearNum > maxYear) {
        errors.carYear = `Invalid Year (must be between ${minYear} and ${maxYear})`;
      }
    }

    if (!formData.vin || formData.vin.length !== 17) {
      errors.vin = "VIN must be 17 characters long";
    }

    if (!formData.mileage || isNaN(Number(formData.mileage))) {
      errors.mileage = "Mileage must be a number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error("Error decoding token: ", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTokenValid()) {
      navigate("/login");
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/quote-requests", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Send to selected agencies
      const quoteRequestId = response.data.quoteRequestId;

      if (!quoteRequestId) {
        console.error("Failed to retrieve quote request ID");
        return;
      }

      await axios.post(`/api/quote-requests/${quoteRequestId}/send`, formData.selectedAgencies, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Quote request submitted and sent to agencies");
      navigate(`/confirmation/${quoteRequestId}`, { state: { submitted: true } });
    } catch (error) {
      console.error("Error submitting quote request", error);
    }
  };

  const handleDateFocus = () => {
    setDateType('date');
  };

  const handleDateBlur = (e) => {
    if (!e.target.value) {
      setDateType('text');
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="form">
        <h2>Generate Quote Request</h2>
        <input
          type={dateType}
          name="dateOfBirth"
          placeholder="Date of Birth (MM/DD/YYYY)"
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          onChange={handleInputChange}
          className="input"
        />
        {formErrors.dateOfBirth && <p className="error-message">{formErrors.dateOfBirth}</p>}

        <input type="text" name="address" placeholder="Address" onChange={handleInputChange} className="input" />
        {formErrors.address && <p className="error-message">{formErrors.address}</p>}

        <select name="gender" onChange={handleInputChange} className="input">
          <option value="">Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="NON-BINARY">Non-Binary</option>
        </select>
        {formErrors.gender && <p className="error-message">{formErrors.gender}</p>}

        <select name="maritalStatus" onChange={handleInputChange} className="input">
          <option value="">Marital Status</option>
          <option value="MARRIED">Married</option>
          <option value="SINGLE">Single</option>
        </select>
        {formErrors.maritalStatus && <p className="error-message">{formErrors.maritalStatus}</p>}

        <select name="homeownerStatus" onChange={handleInputChange} className="input">
          <option value="">Are you a homeowner?</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>
        {formErrors.homeownerStatus && <p className="error-message">{formErrors.homeownerStatus}</p>}

        <input type="text" name="carMake" placeholder="Car Make" onChange={handleInputChange} className="input" />
        {formErrors.carMake && <p className="error-message">{formErrors.carMake}</p>}

        <input type="text" name="carModel" placeholder="Car Model" onChange={handleInputChange} className="input" />
        {formErrors.carModel && <p className="error-message">{formErrors.carModel}</p>}

        <input type="text" name="carYear" placeholder="Car Year" onChange={handleInputChange} className="input" />
        {formErrors.carYear && <p className="error-message">{formErrors.carYear}</p>}

        <input type="text" name="vin" placeholder="VIN" onChange={handleInputChange} className="input" />
        {formErrors.vin && <p className="error-message">{formErrors.vin}</p>}

        <input type="text" name="mileage" placeholder="Mileage" onChange={handleInputChange} className="input" />
        {formErrors.mileage && <p className="error-message">{formErrors.mileage}</p>}

        <select name="primaryUse" onChange={handleInputChange} className="input">
          <option value="">Primary Use</option>
          <option value="COMMERCIAL">Commercial</option>
          <option value="PERSONAL">Personal</option>
        </select>
        {formErrors.primaryUse && <p className="error-message">{formErrors.primaryUse}</p>}

        <select name="numberOfAccidents" onChange={handleInputChange} className="input">
          <option value="">Number of Accidents in Past Three Years</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>
        {formErrors.numberOfAccidents && <p className="error-message">{formErrors.numberOfAccidents}</p>}

        <select name="addDriverToPolicy" onChange={handleInputChange} className="input">
          <option value="">Insure Additional Driver? (this may qualify you for a discount)</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>
        {formErrors.addDriverToPolicy && <p className="error-message">{formErrors.addDriverToPolicy}</p>}

        <div className="section-header">
          <h3>Select Your Coverage Types</h3>
        </div>
        <div className="checkbox-container">
          {["LIABILITY", "COLLISION", "COMPREHENSIVE", "UNINSURED_MOTORIST", "MEDICAL_PAYMENTS", "PERSONAL_INJURY"].map((type) => (
            <div key={type} className="checkbox-item"> {/* Each item in its own div */}
              <input type="checkbox" name="coverageTypes" value={type} onChange={handleCheckboxChange} />
              <label className="label">{type}</label>
            </div>
          ))}
        </div>
        {formErrors.coverageTypes && <p className="error-message">{formErrors.coverageTypes}</p>}

        <div className="section-header">
          <h3>Select Insurance Agencies</h3>
        </div>
        <div className="checkbox-container">
          {insuranceAgencies.map(agency => (
            <div key={agency.id} className="checkbox-item"> {/* Each item in its own div */}
              <input type="checkbox" name="selectedAgencies" value={agency.id} onChange={handleCheckboxChange} />
              <label className="label">{agency.name}</label>
            </div>
          ))}
        </div>
        {formErrors.selectedAgencies && <p className="error-message">{formErrors.selectedAgencies}</p>}

        <textarea name="additionalInfo" placeholder="Additional Information" onChange={handleInputChange} className="input"></textarea>

        <button type="submit" className="button">Submit Quote Request</button>
      </form>
    </>
  );
}

export default QuoteRequestForm;