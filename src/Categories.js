import React from "react";

const Categories = (props) => {
  const { handleCategoryChange = () => {} } = props;

  return (
    <>
      <button
        onClick={() => {
          handleCategoryChange("All");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          handleCategoryChange("lunch");
        }}
      >
        Lunch
      </button>
      <button
        onClick={() => {
          handleCategoryChange("breakfast");
        }}
      >
        {" "}
        Breakfast
      </button>
      <button
        onClick={() => {
          handleCategoryChange("shakes");
        }}
      >
        Shakes
      </button>
    </>
  );
};

export default Categories;
