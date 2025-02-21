import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import SignUp from "./components/SignUp";
import SignUpEnd from "./components/SignUpEnd";

const App = () => {
  return (
    <div>
      <div className="container mt-3 body_font">
        <Routes>
          <Route exact path={"/"} element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/sign-up-end" element={<SignUpEnd />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
