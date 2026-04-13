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
              PERMETTEZ-MOI DE <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis un ingénieur polyvalent qui intervient sur toute la chaîne
              technique — des serveurs bare metal à l'infrastructure cloud, des
              APIs backend aux pipelines de données, des scripts d'automatisation
              aux déploiements en production. Je ne me spécialise pas dans une
              seule couche. Je maîtrise l'ensemble.
              <br />
              <br />
              Actuellement en fin de <b className="purple">MSc Informatique (Data, IA & Cybersécurité)</b>{" "}
              à Epitech, avec une Licence MIAGE de l'Université d'Aix-Marseille,
              je combine des bases académiques solides avec une expérience terrain réelle.
              <br />
              <br />
              Mon spectre technique couvre l'infrastructure cloud <b className="purple">(Azure, Terraform, CI/CD)</b>,
              la programmation système en <b className="purple">C</b>,
              le développement backend avec <b className="purple">Java Spring et Node.js</b>,
              le frontend avec <b className="purple">React et Next.js</b>,
              l'ingénierie des données et le <b className="purple">Machine Learning</b> —
              le tout ancré dans une pratique DevOps quotidienne sur mon propre
              serveur bare metal en production.
              <br />
              <br />
              En tant que <b className="purple">Digital Projects Officer chez LUMA Arles</b>,
              j'ai livré de bout en bout : plateformes web internes, workflows
              d'automatisation, pipelines de migration de données, intégrations
              API et scripts de déploiement — en développant le réflexe de
              livrer, pas seulement de coder.
              <br />
              <br />
              Je suis aussi entrepreneur dans l'âme, je construis de manière
              indépendante des outils SaaS et des plateformes e-commerce, avec
              une vision forte des opportunités tech en Afrique de l'Ouest.
              <br />
              <br />
              Basé en France, ouvert aux opportunités partout en Europe et au-delà.
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
