import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Airline Ticket Booking"
              description="A responsive Airline Ticket Booking web application developed using HTML, CSS, and JavaScript. It allows users to search and view available flights, manage basic booking details, and store user data using Session Storage and Cookies. The project focuses on creating an interactive and realistic flight booking experience entirely on the frontend."
              link="https://github.com/Anchalsharma432/Airline-Ticket-Booking"
              liveLink="https://airline-ticket-booking-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="React Docker App"
              description="A lightweight React application containerized using Docker for easy deployment and scalability. Built with Node.js and npm, it demonstrates how to build, run, and serve a React project inside a Docker container. The setup ensures consistent performance across environments and simplifies the development-to-production workflow."
              link="https://github.com/Anchalsharma432/react-docker-app"
              liveLink="https://blog.Anchalsharma432.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Smart TV Shop"
              description="A full-stack Smart TV Ecommerce Website built with the MERN stack. It enables users to browse, search, and purchase TVs online with JWT authentication, shopping cart, wishlist, and Stripe payment integration. Includes an admin panel, Cloudinary image uploads, and a responsive design for a smooth shopping experience."
              link="https://github.com/Anchalsharma432/smartTV-shop"
              liveLink="https://e-commerce-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Hotel Booking Management"
              description="A fully functional Hotel Room Booking Management System built using C# and .NET. It includes features like user login and signup, hotel gallery view, room booking, checkout page with dummy payment integration and more features. The system provides an interactive interface for managing bookings and enhances the overall hotel reservation experience."
              link="https://github.com/Anchalsharma432/Hotel-Room-Booking"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Pin To Plane"
              description="A modern cleaning services platform built with Next.js and Tailwind CSS. Users can submit service requests via a real-time contact form with email confirmations, while enjoying a fully responsive, interactive interface for a seamless browsing experience across devices. Includes smooth animations and intuitive UI components to enhance user engagement."
              link="https://github.com/Anchalsharma432/PinToPlane"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/Anchalsharma432/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
