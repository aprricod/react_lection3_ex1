import React from "react";
import { Me } from "./Me";

export function GoodMorning(props) {
  return (
    <div>
      Good morning, {React.createElement(Me, { ...props, age: "31" })} Look at
      the time:
      {new Date().toLocaleTimeString()}.
    </div>
  );
}
