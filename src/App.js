import "./App.css";
import Stocks from "./components/Stocks";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <div className="monitor">
        <h1>Stocks</h1>
        <div className="date">
          <p>September 14</p>
        </div>
        <Search />
        <Stocks />
      </div>
    </div>
  );
}

export default App;
