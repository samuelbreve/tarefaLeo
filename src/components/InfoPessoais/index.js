import React from "react";
import "./style.css";

function Resume(props) {
    return <h1><font color="black"><b>Informações Pessoais:</b></font><br />{props.nome}<br />{props.idade}anos<br />Endereço:{props.endereco}<br />----------</h1>;
}

Resume.defaultProps = {
    nome: "Samuel Breve da Silva",
    idade: 23,
    endereco: "Rua São José 758"
};

export default Resume;