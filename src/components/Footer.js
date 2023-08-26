import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import git from "../assets/img/git.png";
import discord from "../assets/img/discord.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h3>Contact : </h3>
            <h5>
              Phone Number : +91 9325257319 <br></br>
              Email: neerajmirashi2@gmail.com</h5>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/neerajmirashi/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/NeerajMirashi" target="_blank"><img src={git} alt="Image" /></a>
              <a href="https://www.instagram.com/neeraj_mirashi/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
