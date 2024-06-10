import React from "react";
import perfil from "./assets/imagen-perfil.png";
const MainContent = () => {
  return (
    <div className="principal-container">
      <div className="img-perfil">
        <img src={perfil} alt="" />
      </div>
      <div className="text-perfil">
        <h2>Abraham García</h2>
        <p>
          Soy un apasionado programador full stack con una sólida experiencia en
          el desarrollo de aplicaciones web. Mi habilidad para trabajar tanto en
          el front-end como en el back-end me permite crear soluciones completas
          y eficientes, siempre centradas en la mejor experiencia de usuario.
          Domino tecnologías como JavaScript, React, Node.js, y Python, y tengo
          un enfoque ágil para la gestión de proyectos, asegurando entregas
          puntuales y de alta calidad. Me encanta resolver problemas complejos y
          aprender constantemente nuevas tecnologías para mantenerme al día en
          un campo en constante evolución.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
