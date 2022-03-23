import "./App.css";
import Stocks from "./components/Stocks";

function App() {
  return (
    <div className="App">
      <div className="monitor">
        <h1>Stocks</h1>
        <div className="date">
          <p>September 14</p>
        </div>
        <input type="text" placeholder="Search"></input>
        <Stocks />
      </div>
    </div>
  );
}

export default App;
