import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
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
