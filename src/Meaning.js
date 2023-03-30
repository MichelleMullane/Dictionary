import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log("meaning props", props);
  return (
    <li className="Meaning">
      <h4 className="d-inline">{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      {props.meaning.example ? (
        <p className="text-secondary">"{props.meaning.example}"</p>
      ) : null}
      <Synonyms synonyms={props.meaning.synonyms} />
    </li>
  );
}
