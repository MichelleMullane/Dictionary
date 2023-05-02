import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log("meaning props", props);
  return (
    <li className="Meaning mt-3">
      <h4 className="d-inline">{props.meaning.partOfSpeech}</h4>
      <div className="definition">{props.meaning.definition}</div>
      {props.meaning.example ? (
        <div className="example">"{props.meaning.example}"</div>
      ) : null}
      {props.meaning.synonyms ? (
        <div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      ) : null}
    </li>
  );
}
