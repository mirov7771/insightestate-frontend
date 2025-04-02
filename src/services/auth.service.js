import axios from "axios";
import {AUTH_URL, PROFILE_URL} from "../constants/constants";

const API_URL = AUTH_URL;
const API_USERS_URL = PROFILE_URL;

async function register (
    username,
    email,
    password,
    phone,
    location,
    whatsUp,
    tgName,
    profileImage
) {
  const response = await axios.post(API_URL + "sign-up/end", {
    fio: username,
    login: email,
    password: password,
    mobileNumber: phone,
    location,
    whatsUp,
    tgName,
    profileImage
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

const profile = (basicAuth) => {
  return axios.get(API_USERS_URL + "me", {
    headers: { 'Authorization': basicAuth }
  })
}

const profileUpdate = (
    login,
    password,
    username,
    phone,
    location,
    basicAuth,
    whatsUp,
    tgName,
    profileImage
) => {
  return axios.put(API_USERS_URL + "me", {
    fio: username,
    mobileNumber: phone,
    location: location,
    password: password,
    whatsUp,
    tgName,
    profileImage
  }, {headers: { 'Authorization': basicAuth }})
}

async function uploadProfileImage (
    file
) {
  const formData = new FormData()
  formData.append('file', file)
  const response = await axios.post(
      API_URL + "load/image", formData, {headers: {'Content-Type': 'multipart/form-data'}}
  )
  return response.data['imageUrl']
}

const AuthService = {
  register,
  login,
  signUp,
  signUpCheck,
  profile,
  profileUpdate,
  uploadProfileImage
}

export default AuthService;
