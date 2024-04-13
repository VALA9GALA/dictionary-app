import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>

            <p>
              <em className="example mb-5">{definition.example}</em>
            </p>

            <Synonyms
              synonyms={definition.synonyms}
              duplicate={props.meaning.synonyms}
            />
          </div>
        );
      })}
      {/*<h4>Synonyms</h4>*/}
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div className="meaning-synonyms">
            <ul>
              <li key={index} className="synonyms text-dark-emphasis">
                {synonym}
              </li>
            </ul>
          </div>
        );
      })}
      {/*<br/>
      {props.meaning.antonyms.map(function (antonym, index) {
        return (
          <div className="meaning-synonyms">
            <ul>
              <li key={index} className="synonyms">
                {antonym}
              </li>
            </ul>
          </div>
        );
      })}*/}
    </div>
  );
}
