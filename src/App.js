import React from 'react';
import ExpProfissional from "./components/ExpProfissional";
import InfoPessoais from "./components/InfoPessoais";
import FormAcademica from "./components/FormAcademica";
import Linguas from "./components/Linguas";
import Skills from "./components/Habilidades";
import "./style.css";

function App() {
  return (
    <div id="app">
      <ul>
        <li>
          <InfoPessoais />
          <FormAcademica />
          <ExpProfissional />
          <Skills />
          <Linguas />
        </li>
      </ul>
    </div>
  );
}

export default App;
