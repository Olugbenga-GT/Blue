import React from "react";
import Filter from "../../../components/ui/filter/Filter";

import "./FilterBar.scss";

const filterWords = [
  "world",
  "following",
  "porpular",
  "post",
  "gender",
  "locations",
  "profession",
  "something",
];
const FilterBar = () => {
  return (
    <div className="filter-bar">
      {filterWords.map((word, i) => (
        <Filter key={i}>{word}</Filter>
      ))}
    </div>
  );
};

export default FilterBar;
