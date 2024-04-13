/*import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="pb-1 me-2"
          placeholder="Enter a word..."
          autoFocus
          onChange={keywordChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-secondary shadow-sm"
        />
      </form>
      <br />
      <Results results={results} />
    </div>
  );
}*/

import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [error, setError] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    if (response.data.length === 0) {
      setError("Word not found. Please check your spelling.");
      setResults(null);
    } else {
      setResults(response.data[0]);
      setError("");
    }
  }

  function handleError(error) {
    console.error("Error fetching data:", error);
    setError(
      <div>
        <FontAwesomeIcon icon={faLemon} className="fs-1 text-secondary" /> Error
        fetching data. <br />
        <div className="text-danger text-opacity-75 mt-1">
          Please check your spelling.
        </div>
      </div>
    );
    setResults(null);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search-form">
        <form onSubmit={search}>
          <input
            type="search"
            className="pb-1 me-2 search-input"
            placeholder="Enter a word..."
            autoFocus
            onChange={keywordChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-secondary shadow-sm"
          />
        </form>
      </section>
      <br />
      {error && <p className="error">{error}</p>}
      {results && <Results results={results} />}
    </div>
  );
}
