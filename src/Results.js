import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results mt-2">
        <section>
          <h2>
            {props.results.word}{" "}
            <small className="text-secondary">{props.results.phonetic}</small>
          </h2>
        </section>
        <ul className="Results-meanings">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
