
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />

      <footer>
        Coded by Sania and{" "}
        <a
          href="https://github.com/sania-jay/React-Weather-App-project"
          target="_blank"
          rel="noreferrer">
          open-sourced on Github{" "}
        </a>
      </footer>
    </div>
  );
}


