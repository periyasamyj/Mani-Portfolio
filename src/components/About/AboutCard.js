import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ramasubramani SK </span>
            from <span className="purple"> chennai, India.</span>
            <br />
            I am currently employed as a graphic design and 3d modeling at MulticoreWare.
            <br />
            I have completed Integrated B.Sc. Visual Communication at S.A engineering College,
             Poonamalle, Chennai, India
            <br />
            <br></br><br />
            <p>
              
I believe in the power of visual storytelling to connect, inspire, and transform. My approach combines technical precision with creative vision to deliver designs that not only look stunning but also communicate effectively and serve their intended purpose.

Currently pursuing my B.Sc. in Visual Communication at S.A College of Arts and Science, I'm constantly exploring new techniques in 3D modeling, animation, and digital design to push the boundaries of creative expression.
            </p>
            
            Apart from Designing, some other activities that I love to do!
          </p> 
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ramasubramani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
