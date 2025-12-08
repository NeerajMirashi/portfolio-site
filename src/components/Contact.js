import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  // 🔥 Formspree handler
  const [state, handleSubmit] = useForm("mqardpbj");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Reset form after successful submit
  if (state.succeeded) {
    setTimeout(() => {
      setFormDetails(formInitialDetails);
    }, 500);

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col size={12} md={6}>
              <h2>Thank You!</h2>
              <p>Your message was sent successfully.</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                     src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>

                  {/* 🔥 IMPORTANT — Formspree submit handler */}
                  <form onSubmit={handleSubmit}>
                    <Row>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          name="firstName"
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          name="lastName"
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          name="email"
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          name="phone"
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          name="message"
                          required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting}>
                          <span>{state.submitting ? "Sending..." : buttonText}</span>
                        </button>
                      </Col>

                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
