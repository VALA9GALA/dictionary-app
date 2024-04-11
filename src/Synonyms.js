import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && !props.duplicate) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="synonyms">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  }
}
