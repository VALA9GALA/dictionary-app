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
import { faLemon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [error, setError] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    /*console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);*/
    if (response.data.length === 0) {
      setError("Word not found. Please check your spelling.");
      setResults(null);
    } else {
      setResults(response.data[0]);
      setError("");
    }
  }

  function handleImgResponse(response) {
    console.log(response);
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

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleError);

    const imgApiKey = "045ace03oteb7d0da03b1286fde00d59";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImgResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="pb-1 pt-1 ps-3 text-dark-emphasis search-input"
              placeholder="Enter a word..."
              autoFocus
              onChange={keywordChange}
            />
            <button className="btn btn-outline-secondary shadow-sm">
              {<FontAwesomeIcon icon={faMagnifyingGlass} />}
            </button>
          </form>
        </section>
        <br />
        {error && <p className="error">{error}</p>}
        {results && <Results results={results} />}
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
