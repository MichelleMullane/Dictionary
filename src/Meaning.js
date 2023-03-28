import React from "react";

export default function Meaning(props) {
  console.log("meaning props", props);
  return (
    <div className="Meaning">
      <h3>POS: {props.meaning.partOfSpeech}</h3>
      <p>Def: {props.meaning.definition}</p>
      <p>Example: {props.meaning.example || "no example"}</p>
    </div>
  );
}
