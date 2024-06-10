import React from "react";
import css from "./assets/css.svg";
import html from "./assets/html.svg";
/* import docker from "./assets/docker.png";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg"; */
import js from "./assets/js.svg";
/* import react from "./assets/react.svg" */
import bootstrap from "./assets/bootstrap.svg";
import mySql from "./assets/mysql.svg";
import rickandmorty from "./assets/rickandmorty.png";
import imagenesModal from "./assets/ImagenesModal.png";
import tictactoc from "./assets/tictactoc.png"
const Proyectos = () => {
  return (
    <div className="proyect-container">
      <div className="proyect">
        <div className="img-proyect">
          <img src={tictactoc} alt="" />
        </div>
        <div className="info-proyect">
          <h3>TIC TAC TOC</h3>
        </div>
        <div className="icon-language">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
        </div>
      </div>
      <div className="proyect">
        <div className="img-proyect">
          <img src={rickandmorty} alt="" />
        </div>
        <div className="info-proyect">
          <h3>RICK AND MORTYS API</h3>
          <div className="icon-language">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
          </div>
        </div>
      </div>
      <div className="proyect">
        <div className="img-proyect">
          <img src="" alt="" />
        </div>
        <div className="info-proyect">
          <h3>CRUD Ecommerce</h3>
          <div className="icon-language">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={mySql} alt="" />
            <img src={bootstrap} alt="" />
          </div>
        </div>
      </div>
      <div className="proyect">
        <div className="img-proyect">
          <img src={imagenesModal} alt="" />
        </div>
        <div className="info-proyect">
          <h3>IMAGENES MODAL</h3>
          <div className="icon-language">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
