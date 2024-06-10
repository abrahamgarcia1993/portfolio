import React from "react";

const Aside = () => {
  return (
    <aside>
      <h2>Mis lenguajes de Programación</h2>
      <div className="language">
        <div className="html">
          <p>HTML</p>
        </div>
        <div className="css">
          <p>CSS</p>
        </div>
        <div className="js">
          <p>JavaScript</p>
        </div>
        <div className="react">
          <p>React</p>
        </div>
        <div className="node">
          <p>Node</p>
        </div>
        <div className="bootstrap">
          <p>BootStrap</p>
        </div>
        <div className="docker">
          <p>Docker</p>
        </div>
        <div className="tailwind">
          <p>Tailwind</p>
        </div>
        <div className="mysql">
          <p>MySql</p>
        </div>
        <div className="mongodb">
          <p>MongoDB</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
