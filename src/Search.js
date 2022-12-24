import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="form" id="search-form">
      <input
        type="text"
        placeholder="Enter City"
        size="35"
        className="enterCity"
        id="searchInput"
      />
      <input type="submit" value="search" className="search" />
      <input type="submit" value="current" className="current" />
    </form>
  );
}
