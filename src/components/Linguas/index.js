import React from "react";
import "./style.css";

function Resume(props) {
    return <h1><font color="black"><b>Linguas:</b></font><br />1.{props.lingua1};<br />2.{props.lingua2}.</h1>;
}

Resume.defaultProps = {
    lingua1: "Ingles básico",
    lingua2: "Hebraico básico"
};

export default Resume;