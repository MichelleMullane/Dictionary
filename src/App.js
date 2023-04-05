import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header mt-5 text-center">Dictionary App</header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a
            href="https://github.com/MichelleMullane"
            target="_blank"
            rel="noreferrer"
          >
            Michelle Mullane
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
