import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
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
              isBlog={false}
              title="The Bunker"
              description="Production-grade bare metal Ubuntu server — self-hosted infrastructure lab running Docker, Vaultwarden, Cloudflare Tunnels and Tailscale VPN. Fully hardened with UFW, Fail2Ban, SSH key-only auth and nightly encrypted backups."
              ghLink="https://github.com/Omar229001"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Terraform Lab — Azure IaC"
              description="Full Azure infrastructure provisioned and managed as code with Terraform — VM, VNet, NSG, public IP and firewall rules. CI/CD pipeline with GitHub Actions for automated terraform plan and apply on every push."
              ghLink="https://github.com/Omar229001/terraform-lab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Zibridge"
              description="Vendor-agnostic data versioning engine for CRM and structured data. Snapshot capture, hash-based diff detection and surgical restoration via a Rosetta Stone ID mapping system. Built with FastAPI, PostgreSQL, MinIO and Neo4j."
              ghLink="https://github.com/Omar229001"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="RadHaus — E-Bike E-commerce"
              description="Full e-commerce platform for premium German e-bikes built with Medusa v2 and Next.js 15. Features SEPA bank transfer payment flow, order tracking, n8n automation for email and PDF generation, and Telegram admin notifications."
              ghLink="https://github.com/Omar229001"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ZiboConnect — Ticketing Platform"
              description="Event ticketing platform with Node.js, TypeScript, Express, Prisma and PostgreSQL. JWT auth, role-based access control, Stripe integration, QR code scanning with hybrid group validation and Docker Compose orchestration."
              ghLink="https://github.com/Omar229001"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="NLP Train Itinerary — Epitech"
              description="CamemBERT-based NER model for French train travel requests. Generated 6,000+ annotated sentences, fine-tuned the model for entity extraction (origin, destination, date) and built a React frontend for route visualization with NetworkX/Dijkstra."
              ghLink="https://github.com/Omar229001"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
