import Dictionary from "./Dictionary";

import "./App.css";
import "./Dictionary.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <em className="valagala-title">VALA</em>
          </h1>
          <span className="fs-2 text-secondary">noun </span>
          <span>
            {" "}
            <em>a gal named val</em>
          </span>
          <h1>
            <em className="valagala-title">GALA</em>
          </h1>
          <br />
          <div className="subtitle">
            <h3 className="pt-1 me-3 dictionary-app">dictionary</h3>
            <h3 className="pt-1 ms-3 dictionary-app">app</h3>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://valagala.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              VALAGALA
            </a>{" "}
            See{" "}
            <a
              href="https://github.com/VALA9GALA/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
