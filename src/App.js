import React from "react";
import MessageSender from "./Components/MessageSender"
import Sidebar from "./Components/Sidebar"
import "./App.css";

function App() {
  return (
    <div className="app">
      <MessageSender />
      <Sidebar />
    </div>
  );
}

export default App;
