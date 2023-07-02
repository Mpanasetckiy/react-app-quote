import "./App.css";
import Main from "./components/Main";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [currentPage, setCurrentPage] = useState("quotes");
  const [query, setQuery] = useState("");

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Header change={handleClick} />
      <SearchBar change={handleChange} setPage={handleClick} query={query} />
      <Main page={currentPage} />
    </>
  );
};

export default App;
