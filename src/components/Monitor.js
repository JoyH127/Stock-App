import Stocks from "./Stocks";
import Search from "./Search";
import React, { useState } from "react";
function Monitor({ stockData, get }) {
  const [value, setValue] = useState([]);
  const getData = (value) => {
    setValue(value);
  };

  get(value);
  return (
    <div>
      <Search />
      <Stocks value={value} getData={getData} />
    </div>
  );
}

export default Monitor;

//getting child state value from parents by function call.
