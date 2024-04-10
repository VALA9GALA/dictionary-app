import React from "react";
import Meaning from "./Meaning";
import Audio from "./Audio";

import "./Dictionary.css";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";*/

export default function Results(props) {
  if (props.results) {
    const phoneticsArray = props.results.phonetics;
    /*const phoneticWord = phoneticsArray.find((text) => text !== "");*/
    const audioFile = phoneticsArray.find(({ audio }) => audio !== "");

    return (
      <div className="Results">
        <h2 className="word-section">
          <span className="word">{props.results.word}</span>{" "}
          <span>{props.results.phonetic}</span>{" "}
          <span>
            <Audio audio={audioFile.audio} />
            {/*<a
              className="audioIcon"
              href={audioFile.audio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMicrophoneLines} />
    </a>*/}
          </span>
        </h2>
        <br />
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
