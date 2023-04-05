import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log("meaning props", props);
  return (
    <li className="Meaning">
      <h4 className="d-inline">{props.meaning.partOfSpeech}</h4>
      <p>
        {" "}
        <strong>Definition: </strong> {props.meaning.definition}
      </p>
      {props.meaning.example ? (
        <p>
          {" "}
          <strong>Example: </strong>{" "}
          <em className="text-secondary">"{props.meaning.example}"</em>
        </p>
      ) : null}
      {props.meaning.synonyms ? (
        <div>
          <strong>Synonym(s): </strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      ) : null}
    </li>
  );
}
