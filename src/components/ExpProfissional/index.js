import React from "react";
import "./style.css";

function Resume(props) {
    return <h1><font color="black"><b>Experiências de trabalho:</b></font><br /> 1.{props.trabalho1};<br />2.{props.trabalho2}.<br />----------</h1>;
}

Resume.defaultProps = {
    
    trabalho1: "Analista de Sistemas",
    trabalho2: "Tecnico em Informatica"

};

export default Resume;