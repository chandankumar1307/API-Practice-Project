import React from "react";
import { Routes, Route } from "react-router-dom";
import Pollution from "./components/Pollution";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <Pollution />
      <Card />
    </div>
  );
};

export default App;
