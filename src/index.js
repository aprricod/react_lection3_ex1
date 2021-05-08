import React from "react";
import ReactDOM from "react-dom";
import { GoodMorning } from "./children/GoodMorning";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const name = "Artem";

// ReactDOM.render(
//   <GoodMorning name={parentName} />,
//   document.getElementById("root")

ReactDOM.render(
  React.createElement(GoodMorning, { name }),
  document.getElementById("root")
);

//setInterval(GoodMorning, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
