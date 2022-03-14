import "./App.css";
import { Header } from "./Pages/Header";
import { Main } from "./Pages/Main";
function App() {
  return (
    <div className="app">
      <header className="appHeader" id="appHeader">
        <Header />
      </header>
      <Main />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
