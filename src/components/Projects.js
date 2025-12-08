import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bot from "../assets/img/bot.jpg";
import arthavedh from "../assets/img/arthavedh.jpg";
import evolotek from "../assets/img/evolotek.jpg";
import eyantra from "../assets/img/eyantra.jpg";
import inaugural from "../assets/img/inaugural.jpg";
import induction from "../assets/img/induction.jpg";
import eyantra2 from "../assets/img/eyantra2.jpg";
import arthavedh_award from "../assets/img/arthavedh_award.jpg";
import nexus from "../assets/img/nexus.jpg";
import encipher from "../assets/img/encipher.png";
import stem from "../assets/img/stem.jpg";
import aws from "../assets/img/aws.jpg";
import bot2 from "../assets/img/bot2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Swatchhta Bot",
      tech: "FPGA | Verilog | Parallel Processing | Path Planning",
      link: <a href="https://youtu.be/l9X1i6Z5cNo" target="_blank">link</a>,
      description: "Autonomous robot deployed to collect types of waste and dispose it into seperate bins. The robot navigates through the different cities to collect segregated waste and dispose it to respective dumping areas.",
      imgUrl: bot,
    },
    {
      title: "Geo Guide",
      tech: "ESP32 | Embedded C | CNN | Image Processing | GIS | Bot building ",
      link: <a href="https://youtu.be/eMjrv826fIM?si=-f45702pbU7gsRwq" target="_blank">link</a>,
      description: "Engineered an autonomous robot for optimal pathfinding in simulated war zones using Dijkstra’s algorithm, with wireless communication capabilities.",
      imgUrl: bot2,
    },  
    {
      title: "Encipher",
      tech: "HTML5 | CSS | JavaScript",
      link: <a href="https://encipher.netlify.app/" target="_blank">link</a>,
      description: "A website that encodes and decodes the plain text securely.",
      imgUrl: encipher,
    },
  ];

//experience
const experience = [
  {
    title: "Software Engineer",
      tech: "Evolotek Solutions Pvt Ltd, Mumbai | Oct 2025 - Present",
      // link: <a href="https://drive.google.com/file/d/1YHzvKUX60ccGYWE2WP50GW8XjdPRYnWr/view?usp=drive_link" target="_blank">link</a>,
      description: "Evolotek is a space of innovation, ownership, and real-world impact. It allows me to build advanced AI workflows, refine my engineering approach, and contribute to solutions that create meaningful value.",
      imgUrl: evolotek,
  },
  {
    title: "Software Engineer",
      tech: "Arthavedh Consulting Pvt Ltd, Pune | March 2024 - Sept 2025",
      link: <a href="https://drive.google.com/file/d/1oaFB-7ULGuN7yASg5XX-I_QId_BBG1q7/view?usp=sharing" target="_blank">link</a>,
      description: "Arthavedh was a phase of intense learning, experimentation, and rapid skill growth. It pushed me to think deeper, build smarter, and approach engineering with a problem-solver’s mindset.",
      imgUrl: arthavedh,
  },
];

//activities
const activities = [
  {
    title: "Rising Star Award ",
    tech: "Arthavedh Consulting Pvt. Ltd.",
    link: <a href="https://www.linkedin.com/posts/neeraj--mirashi_startuplife-machinelearning-fintech-activity-7381923099879010304-hSn6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsZFOMB0rw4Xp8Jj8PGauUCGm1lceBkdU0" target="_blank">link</a>,
    description: "Receiving the Rising Star of the Year award at Arthavedh recognized my ability to deliver high-impact engineering work, take ownership of complex tasks, and consistently contribute to team success.",
    imgUrl: arthavedh_award,
  },
  {
    title: "1st rank  in eyantra competition",
    tech: "IIT Bombay | eYRC 2023-2024",
    link: <a href="https://drive.google.com/file/d/1OaWiW89_Nnm0Dp5jjLMhwKan7ssIZZ_I/view?usp=drive_link" target="_blank">link</a>,
    description: "e-Yantra strengthened my fundamentals in embedded systems, algorithmic problem-solving, and robotics engineering, giving me hands-on exposure to building robust autonomous bots.",
    imgUrl: eyantra2,
  },
  {
    title: "3rd rank  in eyantra competition",
    tech: "IIT Bombay",
    link: <a href="https://drive.google.com/file/d/1OaWiW89_Nnm0Dp5jjLMhwKan7ssIZZ_I/view?usp=drive_link" target="_blank">link</a>,
    description: "Participating in the eYantra Robotics Competition at IIT Bombay was an exhilarating experience that challenged my problem-solving and engineering skills.",
    imgUrl: eyantra,
  },
  
  {
    title: "Inauguration Ceremony Of IEEE CS",
    tech: "IEEE Computer Society",
    description: " As a founding member, I actively contributed to the establishment of the IEEE student chapter on our campus. It was an exciting journey that involved organizing events, workshops, and technical sessions to promote knowledge sharing and foster a vibrant tech community.",
    imgUrl: inaugural,
  },
  {
    title: "Induction Programme Of IEEE SB",
    tech: "IEEE Student Branch",
    description: "The welcoming and induction program for 2nd and 3rd-year students at the IEEE Student Branch was a remarkable initiative that aimed to integrate newcomers into the vibrant IEEE community.",
    imgUrl: induction,
  },
  {
    title: "Nexus & celebration of IEEE Day",
    tech: "IEEE Computer Society",
    description: "Nexus, organized by IEEE Computer Society, was a non-technical event designed for self improvement of students. It coincided with the celebration of IEEE Day, infusing the atmosphere with excitement.",
    imgUrl: nexus,
  },
  {
    title: "STEM-IOT Workshop",
    tech: "IEEE Student Branch",
    description: "During the STEM IoT workshop organized by IEEE Young Professionals for students, the use of sensors was briefly explained. The workshop highlighted how sensors act as the eyes and ears of IoT devices, providing crucial data that allows devices to make intelligent decisions.",
    imgUrl: stem,
  },
  {
    title: "AWS Workshop",
    tech: "IEEE Computer Society",
    description: "The IEEE Computer Society organized an AWS (Amazon Web Services) workshop conducted by Atul Kumbhar sir. He guided the participants through real-world scenarios and best practices for designing scalable and secure cloud architectures.",
    imgUrl: aws,
  },
];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Endeavours</h2>
                <p>A collection of the milestones, initiatives, and learning moments that have pushed me to think bigger.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Implementations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Activities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          experience.map((experience, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...experience}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          activities.map((activities, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...activities}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
