import React from "react";
import Meaning from "./Meaning";

import "./Dictionary.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>
          <span className="word">{props.results.word}</span>
          {" "}
          <span>{props.results.phonetic}</span>
          <span>
            {" "}
            <a
              className="audioIcon"
              href={props.results.phonetics[0].audio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMicrophoneLines} />
            </a>
          </span>
        </h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
