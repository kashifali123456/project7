import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [filtered, setFiltered] =  useState(items);

  const handleCategoryChange = (c) => {
    if (c === "All") return setFiltered(items);
    const newArray = items.filter((item) => {
      return item.category === c;
    });
    setFiltered(newArray);
  };
  return (
    <>
      <Categories handleCategoryChange={handleCategoryChange} />
      <Menu filtered={filtered} />
    </>
  );
}

export default App;
