import React from "react";
import "./Sidebar.css";
import SearchBarSection from "./SearchBarSection";
import Friends from "./Friends.json";

function Sidebar2() {
  return (
    <div>
      <SearchBarSection  data={Friends} />
    </div>
  );
}

export default Sidebar2;
