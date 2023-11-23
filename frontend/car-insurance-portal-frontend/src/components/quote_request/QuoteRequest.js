import MultiStepProgressBar from "./MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./QuoteRequest.css";
import {useEffect, useState} from "react";
import {fields} from "./QuoteRequestFields";
import QuoteRequestForm from "./QuoteRequestForm";
import axios from "axios";

const QuoteRequest = () => {
  const [index, setIndex] = useState(1);
  const totalPagesCount = fields.length;
  const [pageResponses, setPageResponses] = useState({});

  const onPagesResponseUpdate = (step, responsesObj) => {
    setPageResponses({...pageResponses, [step]: responsesObj});
  }
  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index < totalPagesCount) {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // fetch insurance agencies
  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/api/insurance-agencies`, {
          headers: { Authorization: `Bearer ${token}`}
        });
        const agencies = response.data.map(agency => ({ label: agency.name, value: agency.id.toString() }));
        setPageResponses(prev => ({
          ...prev,
          7: { selectedAgencies: agencies }
        }));
      } catch (error) {
        console.error("Error fetching insurance agencies", error);
      }
    }

    if (index === 7) {
      fetchAgencies();
    }
  }, [index]);

  const handleSubmit = async () => {
    const formData = Object.values(pageResponses).reduce((acc, current) => ({ ...acc, ...current }), {});
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/api/quote-requests", formData, {
        headers: { Authorization: `Bearer ${token}`}
      });
      const quoteRequestId = response.data.id;

      const previewResponse = await axios.get(`/api/quote-requests/${quoteRequestId}/preview`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPageResponses({ ...pageResponses, 6: {emailPreview: previewResponse.data }});

      setIndex(7);
    } catch (error) {
      console.error("Error submitting form", error)
    }
  }

  const sendEmailsToSelectedAgencies = async (quoteRequestId, selectedAgencies) => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(`/api/quote-requests/${quoteRequestId}/send`, selectedAgencies, {
        headers: { Authorization: `Bearer ${token}`}
      });
      console.log("Emails sent successfully");
    } catch (error) {
      console.error("Error sending emails", error);
    }
  }

  return (
    <div className="QuoteRequest">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar step={index}/>
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <QuoteRequestForm step={index} list={fields} onPageUpdate={onPagesResponseUpdate} pageResponses={pageResponses}/>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
              {index === totalPagesCount ? (
                <Button onClick={handleSubmit}>Submit</Button>
              ) : (
                <Button onClick={nextButton}>Next</Button>
              )}
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default QuoteRequest;