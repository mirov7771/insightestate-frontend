import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import Politics from "../elements/Politics";
import {REDIRECT_URL} from "../constants/constants";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        Обязательное поле
      </div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        (response) => {
          console.log(response)
          setLoading(false);
          window.location.href = `${REDIRECT_URL}?accessToken=${response['accessToken']}`
          // navigate("/profile");
          // window.location.reload();
        },
        () => {
          setLoading(false);
          setMessage("Email или пароль указаны не верно. Проверьте данные или воспользуйтесь регистрацией");
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
              src="/logo.svg"
              alt="profile-img"
              className="profile-img-card"
          />

          <div className="step"/>

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                  placeholder="Email"
              />
            </div>

            <div className="form-group">
              <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  placeholder="Пароль"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Войти</span>
              </button>
            </div>

            <div className="form-group center_registration">
              <a href="/sign-up" className="button">Регистрация</a>
            </div>

            {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
            )}
            <CheckButton style={{display: "none"}} ref={checkBtn}/>
          </Form>
        </div>

        <Politics />

      </div>
  );
};

export default Login;
