import React, { useState } from "react";

const SortDropDown = () => {
  const [sortDropDown, setSortDropDown] = useState("");

  return (
    <div>
      <select
        name="sortDropDown"
        id="sortDropDown"
        value={sortDropDown}
      >
        <option value="">Select...</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortDropDown;
