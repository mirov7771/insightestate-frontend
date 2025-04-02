import React, {useState, useRef, useEffect} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import {useSearchParams} from "react-router-dom";
import {REDIRECT_URL} from "../constants/constants";

const validPhone = (value) => {
  if (value.length < 5 || value.length > 16) {
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


const Profile = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [basicToken, setBasicToken] = useState(searchParams.get('basicToken') || '')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

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

  useEffect(() => {
    if (!dataLoaded) {
      const token = atob(basicToken.replace('Basic ', '')).split(':')
      console.log(token)
      AuthService.profile(basicToken).then((response) => {
        console.log(response);
        setEmail(token[0])
        setPassword(token[1])
        setUsername(response.data.fio);
        setLocation(response.data.location);
        setPhone(response.data.mobileNumber);
        setDataLoaded(true);
        setWhatsUp(response.data.whatsUp);
        setTgName(response.data.tgName);
        setProfileImage(response.data.profileImage);
      })
    }
  })

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
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

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.profileUpdate(
          email,
          password,
          username,
          phone,
          location,
          basicToken,
          whatsUp,
          tgName,
          profileImage
      ).then(
        (response) => {
          setMessage("Данные обновлены! В течении нескольких секунд вы будете перенаправлены на сайт");
          setSuccessful(true);
          const newBasicToken = 'Basic ' + btoa(email + ':' + password);
          window.location.href = `${REDIRECT_URL}?basicToken=${newBasicToken}`
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
                      validations={[vusername]}
                      placeholder="Фамилия и Имя"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      placeholder="Email"
                      disabled={true}
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={onChangePhone}
                      validations={[validPhone]}
                      placeholder="Номер телефона"
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
                      type="text"
                      className="form-control"
                      name="location"
                      value={location}
                      onChange={onChangeLocation}
                      validations={[validLocation]}
                      placeholder="Локация"
                  />
                </div>

                <div className="form-group">
                  <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[vpassword]}
                      placeholder="Пароль"
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Сохранить</button>
                </div>

                <div className="form-group center_registration">
                  <a href={REDIRECT_URL} className="button">Вернуться</a>
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

export default Profile;
