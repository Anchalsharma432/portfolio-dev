import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I’m <span className="purple">Anchal Sharma</span> — a{" "}
            <b className="purple">Full Stack Developer</b> based in Ontario,
            Canada 🇨🇦, originally from Punjab, India.
            <br />
            <br />
            With over <b className="purple">3 years of experience</b> in
            designing and developing scalable, high-performance web and mobile
            applications, I specialize in{" "}
            <b className="purple">
              React.js, Next.js, Node.js, Express, and TypeORM (MySQL)
            </b>
            . My expertise also spans{" "}
            <b className="purple">
              cloud deployments (AWS, GCP, Azure), CI/CD automation, and
              database optimization
            </b>
            .
            <br />
            <br />
            I’m passionate about building secure, user-focused products powered
            by modern technologies, microservice architectures, and seamless
            DevOps workflows. Every project I take on is driven by a commitment
            to clean design, performance, and real-world impact.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new cloud & DevOps tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and reading about tech innovation
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and watching sci-fi series
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Build things that not only work — but inspire confidence in how
            they’re built."
          </p>
          <footer className="blockquote-footer">Anchal Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
