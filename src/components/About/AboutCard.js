import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ally MacLeod </span>
            from <span className="purple"> Waterloo, Ontario.</span>
            <br />
            I am currently employed as a software engineering intern at Christie Digital.
            <br />
            I am pursuing a bachelor's in biomedical engineering at the University of Waterloo, with an option in software engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming isn’t about what you know; it’s about what you can figure out."{" "}
          </p>
          <footer className="blockquote-footer">Chris Pine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;