import {useEffect, useState} from "react";
import axios from "axios";
import "./QuoteRequestForm.css";
import Navbar from "../shared_components/Navbar";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        <input
          type={dateType}
          name="dateOfBirth"
          placeholder="Date of Birth (MM/DD/YYYY)"
          onFocus={handleDateFocus}
          onBlur={handleDateBlur}
          onChange={handleInputChange}
          className="input"
        />
        <input type="text" name="address" placeholder="Address" onChange={handleInputChange} className="input" />

        <select name="gender" onChange={handleInputChange} className="input">
          <option value="">Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="NON-BINARY">Non-Binary</option>
        </select>

        <select name="maritalStatus" onChange={handleInputChange} className="input">
          <option value="">Marital Status</option>
          <option value="MARRIED">Married</option>
          <option value="SINGLE">Single</option>
        </select>

        <select name="homeownerStatus" onChange={handleInputChange} className="input">
          <option value="">Are you a homeowner?</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <input type="text" name="carMake" placeholder="Car Make" onChange={handleInputChange} className="input" />
        <input type="text" name="carModel" placeholder="Car Model" onChange={handleInputChange} className="input" />
        <input type="text" name="carYear" placeholder="Car Year" onChange={handleInputChange} className="input" />
        <input type="text" name="vin" placeholder="VIN" onChange={handleInputChange} className="input" />
        <input type="text" name="mileage" placeholder="Mileage" onChange={handleInputChange} className="input" />

        <select name="primaryUse" onChange={handleInputChange} className="input">
          <option value="">Primary Use</option>
          <option value="COMMERCIAL">Commercial</option>
          <option value="PERSONAL">Personal</option>
        </select>

        <select name="numberOfAccidents" onChange={handleInputChange} className="input">
          <option value="">Number of Accidents</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>

        <select name="addDriverToPolicy" onChange={handleInputChange} className="input">
          <option value="">Insure Additional Driver? (this may qualify you for a discount)</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <div className="checkbox-container">
          {["LIABILITY", "COLLISION", "COMPREHENSIVE", "UNINSURED_MOTORIST", "MEDICAL_PAYMENTS", "PERSONAL_INJURY"].map((type) => (
            <label key={type} className="label">
              <input type="checkbox" name="coverageTypes" value={type} onChange={handleCheckboxChange} />
              {type}
            </label>
          ))}
        </div>

        <div className="checkbox-container">
          {insuranceAgencies.map(agency => (
            <label key={agency.id} className="label">
              <input type="checkbox" name="selectedAgencies" value={agency.id} onChange={handleCheckboxChange} />
              {agency.name}
            </label>
          ))}
        </div>

        <textarea name="additionalInfo" placeholder="Additional Information" onChange={handleInputChange} className="input"></textarea>

        <button type="submit" className="button">Submit Quote Request</button>
      </form>
    </>
  );
}

export default QuoteRequestForm;