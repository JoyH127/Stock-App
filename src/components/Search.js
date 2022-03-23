import { useState, useEffect } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => searchItems(e.target.value)}
    ></input>
  );
}
export default Search;
