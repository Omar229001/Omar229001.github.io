import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis <span className="purple">Oumorou ZIBO</span>,{" "}
            <span className="purple">ingénieur DevOps & Cloud</span> basé en France.
            <br />
            Diplômé d'un <span className="purple">Master 2 — Expert en Ingénierie
            et Systèmes d'Information</span> à{" "}
            <span className="purple">Epitech Marseille</span>, avec une Licence
            MIAGE de l'Université d'Aix-Marseille.
            <br />
            Je me spécialise dans l'<span className="purple">intégration
            applicative avec Java Spring Boot</span>, l'infrastructure cloud
            et la <span className="purple">transformation digitale</span>.
            <br />
            <br />
            En dehors du code, j'aime aussi :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéo 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des articles tech ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et découvrir de nouveaux endroits 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des choses qui font vraiment la différence."{" "}
          </p>
          <footer className="blockquote-footer">Oumorou ZIBO</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
