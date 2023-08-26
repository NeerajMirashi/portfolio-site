
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c from "../assets/img/c.png";
import cpp from "../assets/img/cpp.png";
import java from "../assets/img/java.png";
import sql from "../assets/img/sql.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import ms from "../assets/img/ms.png";
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
                                <img src={c} alt="Image" />
                                <h5>C Programming</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++ Programing</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java Programming</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>PL/SQL</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={ms} alt="Image" />
                                <h5>Microsoft Office</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
