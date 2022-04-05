import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Monitor from "./components/Monitor";
import Stock from "./components/Stock";
function App() {
  const [stockData, setStock] = useState([]);
  const get = (stockData) => {
    setStock(stockData);
  };
  console.log("finally?", stockData);
  return (
    <div className="App">
      <div className="monitor">
        <h1>Stocks</h1>
        <div className="date">
          <p>September 14</p>
          <Routes>
            <Route
              path="/"
              element={<Monitor stockData={stockData} get={get} />}
            />
            <Route path="/:stock_id" element={<Stock {...stockData} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
