import React from "react";
import "./Sidebar.css";
import SearchBarSection from "./SearchBarSection";
import Friends from "./Friends.json";

function Sidebar() {
  return (
    <div className="sidebar">
      <SearchBarSection  data={Friends} />
    </div>
  );
}

export default Sidebar;
