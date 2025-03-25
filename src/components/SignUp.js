import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import {useCookies} from "react-cookie";
import {ROUTES} from "../constants/constants";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        Обязательное поле
      </div>
    );
  }
};

const SignUp = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [cookies, setCookie] = useCookies()

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    console.log(cookies);
  };

  const handleSinUp = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.signUp(username).then(
        () => {
          setCookie('client-email', username);
          navigate(ROUTES.signUpEnd);
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
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
        <Form onSubmit={handleSinUp} ref={form}>
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
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Получить код</span>
            </button>
          </div>

          <div className="form-group center">
            <a href={ROUTES.login} className="button">Войти</a>
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

      <div className="form-group spam">
        Не видите письмо? Проверьте папку «Спам» — код мог попасть туда
      </div>

    </div>
  );
};

export default SignUp;
