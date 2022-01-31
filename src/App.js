import React from "react";
import { Routes, Route } from "react-router-dom";
import Tree from "./components/Tree";
import Pollution from "./components/Pollution";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/tree" element={<Tree />} />
        <Route exact path="/pollution" element={<Pollution />} />
      </Routes>
    </div>
  );
};

export default App;
