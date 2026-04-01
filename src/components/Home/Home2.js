import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a versatile engineer who builds across the full spectrum —
              from bare metal servers to cloud infrastructure, from backend APIs
              to data pipelines, from automation scripts to production deployments.
              I don't specialize in one layer. I own the whole thing.
              <br />
              <br />
              Currently pursuing an{" "}
              <b className="purple">MSc in Computer Science (Data, AI & Cybersecurity)</b>{" "}
              at Epitech, with a MIAGE degree from Université d'Aix-Marseille,
              I combine strong academic foundations with real-world engineering experience.
              <br />
              <br />
              My technical range spans
              <i>
                <b className="purple"> cloud infrastructure (Azure, Terraform, CI/CD)</b>
              </i>
              , systems programming in <b className="purple">C and Rust</b>,
              backend development with <b className="purple">Java Spring and Node.js</b>,
              frontend with <b className="purple">React and Next.js</b>,
              data engineering and <b className="purple">Machine Learning</b> —
              all grounded by hands-on DevOps practice on my own
              bare metal production server.
              <br />
              <br />
              As a Digital Projects Officer at{" "}
              <b className="purple">LUMA Arles</b>, I've shipped end-to-end:
              internal web platforms, no-code automation workflows,
              data migration pipelines, API integrations and deployment scripts —
              building the reflex of delivering, not just coding.
              <br />
              <br />
              I'm also an entrepreneur at heart, independently building
              SaaS tools and e-commerce platforms, with a strong vision for
              <b className="purple"> tech opportunities in West Africa</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
