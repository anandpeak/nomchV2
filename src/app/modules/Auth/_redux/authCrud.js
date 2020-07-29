import axios from "axios";
import qs from 'querystring'

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export const MAIN_URL = 'http://dev.nomch.mn';
export const LOGIN_DEV_URL = '/mobile/api/v2/auth/login'
export const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
export const LOCAL_URL = 'http://localhost:8000'
// export function login(email, password) {
//   return axios.post(LOGIN_URL, { email, password });
// }

let token = null;

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
    // 'Authorization': token ? 'Bearer ' + token : ''
  }
};

export function login(email, password) {

  let bodyParams = {
    _phone: 88814833, _password: 1111
  }

  // axios.post(MAIN_URL + LOGIN_DEV_URL, qs.stringify(bodyParams), config).then(res => {
  //   console.log('aaa = ', res)
  // });

  return axios.post(MAIN_URL + LOGIN_DEV_URL, qs.stringify(bodyParams), config);
}


export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
