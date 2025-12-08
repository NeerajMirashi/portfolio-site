
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from "../assets/img/python.png";
import nifi from "../assets/img/nifi.png";
import n8n from "../assets/img/n8n.png";
import sql from "../assets/img/sql.png";
import supabase from "../assets/img/supabase.png";
import langgraph from "../assets/img/langgraph.png";
import docker from "../assets/img/docker.jpg";
// import ms from "../assets/img/ms.png";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>With a passion for continuous learning and a determined spirit, I possess a versatile skillset that extends across various technical domains. As a lifelong learner, I am eager to contribute my skills to meaningful projects, making a positive impact and striving for excellence.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={nifi} alt="Image" />
                                <h5>Apache Nifi</h5>
                            </div>
                            <div className="item">
                                <img src={n8n} alt="Image" />
                                <h5>n8n</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={supabase} alt="Image" />
                                <h5>Supabase</h5>
                            </div>
                            <div className="item">
                                <img src={langgraph} alt="Image" />
                                <h5>LangGraph</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            {/* <div className="item">
                                <img src={ms} alt="Image" />
                                <h5>Microsoft Office</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
