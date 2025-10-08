import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm a <b className="purple">Full Stack Developer</b> with 3+ years of experience crafting high-performance web and mobile applications. 🚀
              <br />
              <br />
              I specialize in building robust applications using
              <i>
                <b className="purple"> React.js, Next.js, Node.js, Express, and Flutter</b>
              </i>
              , combined with cloud deployments on <b className="purple">AWS, GCP, and Azure</b>.
              <br />
              <br />
              My passion lies in creating scalable, secure, and user-friendly products, from responsive web apps to cross-platform mobile experiences. I thrive on solving complex problems with
              <i>
                <b className="purple"> modern frameworks and cutting-edge technologies</b>
              </i>
              .
              <br />
              <br />
              When I’m not coding, I enjoy optimizing workflows, automating processes, and exploring <b className="purple">cloud architectures</b> to deliver seamless, high-quality solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out</span> and say hello!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anchalsharma432"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anchal-sharma-vatts/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2
