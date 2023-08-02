import React from "react";
import "./App.css";
import MainComponent from "./component/MainComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <MainComponent />

      <Outlet />
    </div>
  );
}

export default App;
