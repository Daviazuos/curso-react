import "./App.css";
import React from "react";

import First from "./components/basic/First";
import Parameter from "./components/basic/Parameter";
import Fragment from "./components/basic/Fragment";
import RandomNumber from "./components/basic/randon";
import Card from "./components/layout/Card";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Desafio aleatório" color="#080">
          <RandomNumber min={5} max={12} />
        </Card>

        <Card titulo="Fragmento">
          <Fragment />
        </Card>

        <Card titulo="Parametro">
          <Parameter titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
        </Card>

        <Card titulo="Primeiro">
          <First></First>
        </Card>
      </div>
    </div>
  );
};
