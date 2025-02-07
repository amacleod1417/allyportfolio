import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import amode from "../../Assets/Projects/amode.png";
import mrgoose from "../../Assets/Projects/mrgoose.png";
import hospital from "../../Assets/Projects/hospital.png";
import rpg from "../../Assets/Projects/rpg.png";
import transparadon from "../../Assets/Projects/transparadon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Readmission Prediction"
              description="A machine learning-based application that analyzes patient medical records to predict the likelihood of hospital readmission within 30 days. By leveraging predictive modeling and data-driven insights, this tool helps healthcare providers identify high-risk patients, optimize treatment plans, and improve overall patient outcomes."
              ghLink="https://github.com/amacleod1417/Predicting-Hospital-Readmission"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transparadon}
              isBlog={false}
              title="Transparadon"
              description="A decentralized charity donation platform designed to bring transparency, accountability, and efficiency to the world of charitable giving. By leveraging blockchain technology, Transparadon ensures that every donation is securely recorded, traceable, and distributed with full transparency, empowering donors and charities alike to make a meaningful impact."
              ghLink="https://github.com/amacleod1417/Transparadon-Project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mrgoose}
              isBlog={false}
              title="$MRGOOSE"
              description="ETHDenver 2024 project to create a tokenized experience that rewards event participation and offers exclusive merchandise opportunities for Waterloo Blockchain"
              ghLink="https://github.com/amacleod1417/MRGOOSE"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
             // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpg}
              isBlog={false}
              title="RPGCharacterGernerator"
              description="A full-stack application that enables users to generate detailed and customizable characters for role-playing games. With features such as randomized stats, customizable attributes, and dynamic character sheets, the platform provides an immersive and seamless experience for players looking to bring their unique characters to life."
              ghLink="https://github.com/amacleod1417/RPGCharacterGenerator"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amode}
              isBlog={false}
              title="A-Mode Beamforming"
              description="A beamforming algorithm for A-mode (Amplitude Mode) ultrasound scanning using C++. A-mode ultrasound is one of the simplest types of ultrasound imaging, where a single transducer sends out a pulse, and the returning echoes are displayed as amplitude spikes corresponding to tissue interfaces."
              ghLink="https://github.com/amacleod1417/A-mode-Beamforming"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;