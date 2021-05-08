import React from "react";

export function Me(...props) {
  console.log(props[0]);
  return (
    <p>
      {props[0].name} {props[0].age};
    </p>
  );
}
