import React from "react";
import Meaning from "./Meaning";
import Audio from "./Audio";

import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    const phoneticsArray = props.results.phonetics;
    const phoneticWord = phoneticsArray.find(({ text }) => text);
    const audioFile = phoneticsArray.find(({ audio }) => audio);

    return (
      <div className="Results">
        <section className="word-phonetic-audio">
          <h2 className="word-section">
            <span className="word">{props.results.word}</span>{" "}
            <span>{phoneticWord.text}</span>{" "}
            <span>
              <Audio audio={audioFile} />
            </span>
          </h2>
        </section>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="meanings">
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
