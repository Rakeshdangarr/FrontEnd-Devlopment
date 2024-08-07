import React from "react";
import ReactDOM from "react-dom/client"
import Whatever from "./Name";
import Sname from "./Surname";
import Style from "./ExternalStyleSheet";
import './assets/css/style.css'


const root=ReactDOM.createRoot(document.getElementById("indexid"))

root.render(
    <>
    <Whatever/>
    <Sname/>
    <Style/>

    </>
)