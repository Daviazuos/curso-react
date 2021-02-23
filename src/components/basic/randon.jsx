import React from "react";

export default (props) => {
  return (
    <div>
      O Resultado do número aleátório é:{" "}
      {parseInt(Math.random() * props.max - props.min + props.min)}
    </div>
  );
};
