import React from "react";
import { Routes, Route } from "react-router-dom";
import Tree from "./components/Tree"

const App = () => {
  return (
    <div className="app">
      <Routes>
       <Route exact path="/tree" element={<Tree/>} />
      </Routes>
    </div>
  );
};

export default App;