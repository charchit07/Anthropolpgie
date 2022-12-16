import React from "react";

export default function Item(props) {
  const style1 = { margin: "10px" };
  const style2 = { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" };
  return (
    <div style={{ ...style1, ...style2 }}>
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p style={{ fontWeight: "bold" }}>{props.price}</p>
    </div>
  );
}