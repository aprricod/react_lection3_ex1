import React from "react";
import { Me } from "./children/Me";
import { He } from "./children/He";

export function GoodMorning(props) {
  return (
    <div>
      Good morning, {React.createElement(Me, { ...props, age: "31" })} Look at
      the time:
      {new Date().toLocaleTimeString()}
      <hr />
      <He name="Vova1" />
    </div>
  );
}
