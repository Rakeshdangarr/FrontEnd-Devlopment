import React from "react";
import ReactDOM from "react-dom/client"
import Namedetail from "./Myinfo";
import Style from "./ExternalStyle";
import "./assets/css/Style.css"
import "bootstrap"




const root=ReactDOM.createRoot(document.getElementById("nameinfo"))

root.render(
  <>
  <Namedetail/>
  <Style/>
   
  </>
)