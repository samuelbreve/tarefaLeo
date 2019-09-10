import React from "react";
import "./style.css";

function Resume(props) {
    return <h1><font color="black"><b>Formação academica:</b></font><br />{props.escola};<br />{props.escola1}.<br />----------</h1>;
}

Resume.defaultProps = {
    
    escola: "Ensino fundamental completo",
    escola1: "Ensino médio completo"

};

export default Resume;