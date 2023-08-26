// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     })
//   }

//   const clearFields = () => {
//     setEmail('');
//   }

//   return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp">
//           <Row>
//             <h2>Hobbies : </h2> <h3><br></br>Football, Listening Podcast and Tedx talks, Music</h3>
//           </Row>
//         </div>
//       </Col>
//   )
// }
