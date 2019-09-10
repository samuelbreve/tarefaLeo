import React from "react";
import "./style.css";

function Resume(props) {
    return <h1><font color="black"><b>Habilidades:</b></font><br />1.{props.hab1};<br />2.{props.hab2};<br />3.{props.hab3}.<br />----------</h1>;
}

Resume.defaultProps = {
    hab1: "Perseverante",
    hab2: "Trabalho em grupo",
    hab3: "Comunicativo"
};

export default Resume;