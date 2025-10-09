import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Fullstack_Developer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Developer Intern - TRAVELTICAL INC."
              date="September 2025 - present"
              content={[
                "	Developed and deployed responsive web applications using React, Next.js, and Tailwind CSS, improving load times and user engagement by 35%.",
                "	Engineered scalable RESTful APIs with Node.js, Express, and TypeORM (MySQL), optimizing database queries and reducing response latency by 25%.",
                "	Built cross-platform mobile components in Flutter, accelerating feature rollout and ensuring consistent UI across devices.",
                "	Automated CI/CD workflows with GitHub Actions and Docker, reducing deployment time by 50% and improving release reliability.",
              ]}
            />

            <Resumecontent
              title="Software developer - PATIENTBOND PVT. LTD."
              date="January 2022 - January 2024"
              content={[
                "•	Built a scalable healthcare appointment management platform using the C# .net framework, increasing patient engagement and digital bookings by 45%.",
                "	Architected microservices-based backend systems to decouple services and boost performance, enabling 30% faster feature deployment across multiple healthcare modules.",
                "	Integrated Firebase real-time database and automated notification workflows, reducing appointment conflicts and missed bookings by 40%.",
                "	Implemented end-to-end HIPAA-compliant security, including JWT authentication, data encryption, and audit logging, ensuring secure and compliant handling of sensitive patient data.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Post Graduate in Full-Stack Development"
              date="2024 - 2025"
              content={[
                `GPA: 3.40/4 `,
                "LAMBTON COLLEGE, Mississauga, ON, Canada.",
              ]}
            />
            <Resumecontent
              title="Bachelor of Engineering in Computer Science"
              date="2019 - 2023"
              content={[
                `CGPA: 9.78/10 `,
                "Graduated from CHITKARA UNIVERSITY, Punjab, India.",
              ]}
            />

            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hacker in Bramhacks, Brampton"
              date="November 2024"
              content={[
                "Achieved 4th place in a 24-hour hackathon by developing an innovative and reliable solution for Brampton Transit.",
              ]}
            />
            <Resumecontent
              title="Volunteer at Hack the North, Waterloo"
              date="November 2024"
              content={[
                "Assisted in event operations and logistics.",
                "Engaged with sponsors and participants to ensure smooth event flow and support.",
                "Collaborated with fellow volunteers to manage tasks and enhance attendee experience.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
