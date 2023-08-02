import React from "react";
import Home from "./Home";
import "../App.css";
import MyNavpar from "./Navpar";

const Fotter = () => {
  return (
    <div>
      <h3>
        Created By<bold style={{ color: "red" }}>🎉🎉</bold>{" "}
      </h3>
      <h4> Mostafa Ahmed {new Date().getFullYear()}</h4>
    </div>
  );
};
function MainComponent() {
  return (
    <div>
      <MyNavpar />
      <Fotter />
    </div>
  );
}

export default MainComponent;
