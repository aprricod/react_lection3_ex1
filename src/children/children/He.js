import React from "react";

export function He(...props) {
  console.log(props[0]);
  return (
    <p>
      Mr. {props[0].name} {props[0].age};
    </p>
  );
}
