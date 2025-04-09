import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import {useCookies} from "react-cookie";
import {REDIRECT_URL, ROUTES} from "../constants/constants";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        Обязательное поле
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        Email не валидный
      </div>
    );
  }
};

const validPhone = (value) => {
  if (value.length < 3) {
    return (
        <div className="invalid-feedback d-block">
          Номер телефона не валидный
        </div>
    );
  }
};

const validLocation = (value) => {
  if (value.length < 4) {
    return (
        <div className="invalid-feedback d-block">
          Локация не валидна
        </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3) {
    return (
      <div className="invalid-feedback d-block">
        Имя должно быть более 3х символов
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        Пароль должен содержать от 6 до 40 символов
      </div>
    );
  }
};


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [cookies, setCookie] = useCookies()

  const cookieEmail = cookies['client-email']
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(cookieEmail || "");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const [whatsUp, setWhatsUp] = useState("");
  const [tgName, setTgName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const onChangeWhatsUp = (e) => {
    const whatsUp  = e.target.value;
    setWhatsUp(whatsUp);
  };

  const onChangeTgName = (e) => {
    const tgName  = e.target.value;
    setTgName(tgName);
  };

  const onChangeProfileImage = async (e) => {
    const profileImage  = e.target.files;
    const imageUrl = await AuthService.uploadProfileImage(profileImage[0])
    console.log(imageUrl)
    setProfileImage(imageUrl);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePassword2 = (e) => {
    const password = e.target.value;
    setPassword2(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setMessage("Пароли не совпадают");
      setSuccessful(false);
      return;
    }
    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(
          username,
          email,
          password,
          phone,
          location,
          whatsUp,
          tgName,
          profileImage
      ).then(
        (response) => {
          setMessage("Поздравляем! Регистрация завершена, в течении нескольких секунд вы будете перенаправлены на сайт");
          setSuccessful(true);
          const basicToken = 'Basic ' + btoa(email + ':' + password);
          window.location.href = `${REDIRECT_URL}?accessToken=${response['accessToken']}&basicToken=${basicToken}`
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
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
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
              <div>
                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                      placeholder="Фамилия и Имя"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                      placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={onChangePhone}
                      validations={[required, validPhone]}
                      placeholder="Номер телефона"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="location"
                      value={location}
                      onChange={onChangeLocation}
                      validations={[required, validLocation]}
                      placeholder="Локация"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="whatsUp"
                      value={whatsUp}
                      onChange={onChangeWhatsUp}
                      placeholder="WhatsApp номер"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="tgName"
                      value={tgName}
                      onChange={onChangeTgName}
                      placeholder="Имя в телеграмм"
                  />
                </div>

                <div className="form-group">
                  Фото профиля
                  <Input
                      type="file"
                      className="form-control"
                      name="profileImage"
                      accept='image/*'
                      onChange={onChangeProfileImage}
                  />
                </div>


                <div className="form-group">
                  <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                      placeholder="Пароль"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="password"
                      className="form-control"
                      name="password2"
                      value={password2}
                      onChange={onChangePassword2}
                      validations={[required, vpassword]}
                      placeholder="Повторите пароль"
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Зарегистрироваться</button>
                </div>

                <div className="form-group center">
                  <a href={ROUTES.login} className="button">Войти</a>
                </div>
              </div>
          )}

          {message && (
              <div className="form-group">
                <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                >
                  {message}
                </div>
              </div>
          )}
          <CheckButton style={{display: "none"}} ref={checkBtn}/>
        </Form>
      </div>
    </div>
  );
};

export default Register;
