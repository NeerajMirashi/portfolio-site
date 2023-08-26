import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, tech, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h2>{title}</h2>
          <p>{tech}</p>
          <p>{link} </p>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
