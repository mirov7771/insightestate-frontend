import axios from "axios";

const API_URL = "http://77.238.232.18:8080/auth/";

async function register (
    username,
    email,
    password,
    phone,
    location
) {
  const response = await axios.post(API_URL + "sign-up/end", {
    fio: username,
    login: email,
    password: password,
    mobileNumber: phone,
    location
  });
  if (response.status === 200) {
    return this.login(email, password);
  }
  throw new Error('Registration failed');
}

const login = (username, password) => {
  const basicAuth = 'Basic ' + btoa(username + ':' + password);
  console.log(basicAuth);
  return axios
    .post(API_URL + "sign-in", {}, {
      headers: { 'Authorization': basicAuth }
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const signUp = (username) => {
  return axios.post(API_URL + "sign-up", {
    login: username
  });
}

const signUpCheck = (username, confirmCode) => {
  return axios.post(API_URL + "sign-up/confirm-code/check", {
    login: username,
    confirmCode
  });
}


const AuthService = {
  register,
  login,
  signUp,
  signUpCheck
}

export default AuthService;
