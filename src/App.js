import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import SignUp from "./components/SignUp";
import SignUpEnd from "./components/SignUpEnd";
import Profile from "./components/Profile";
import {ROUTES} from "./constants/constants";

const App = () => {
  return (
    <div>
      <div className="container mt-3 body_font">
        <Routes>
          <Route exact path={ROUTES.login} element={<Login />} />
          <Route exact path={ROUTES.register} element={<Register />} />
          <Route exact path={ROUTES.signUp} element={<SignUp />} />
          <Route exact path={ROUTES.signUpEnd} element={<SignUpEnd />} />
          <Route exact path={ROUTES.profile} element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
