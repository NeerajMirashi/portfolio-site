import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import header from "../assets/img/header.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import neeraj from '../assets/img/neeraj.jpg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI Engineer", "Top Performer", "Ownership-Driven Engineer", "Data-Driven Problem Solver" ];
  const period = 2500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`I'm `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "e-Yantra Winner @ IIT Bombay", "Chair of IEEE Student Branch, DKTE", "Full Stack Developer", "Self Learner", "Problem Solver" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am Computer Science Engineer (AI/ML) passionate about building the next generation of intelligent systems. I enjoy exploring and building new ideas, designing automation workflows, and transforming complex problems into scalable, futuristic solutions. My work focuses on using AI to unlock efficiency, create new capabilities, and shape smarter digital experiences. I’m driven by curiosity and long-term vision—constantly experimenting, improving, and pushing boundaries to build technology that moves organizations forward.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility> */}
             
                <img src={header} style={{border:"50px"}} alt="Header Img"/>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
