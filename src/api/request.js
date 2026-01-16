import axios from "axios";
import i18n from '../languages'
import { showToast } from "vant";

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 120000
});

request.interceptors.request.use((config) => {
  if (localStorage.getItem("Token-YUMO")) {
    config.headers['X-Access-Token'] = localStorage.getItem("Token-YUMO")
  }
  return config;
}, (error) => {
  return Promise.reject(error)
});

request.interceptors.response.use((config) => {
  if (config.data.code == 500 && config.data.msg == "NOT_LOGIN") {
    showToast(i18n.global.t("token"));
    localStorage.removeItem("Token-YUMO")
    localStorage.removeItem("Account-YUMO")
    window.location.reload();
  }
  return config;
}, (err) => {
  const code = err.response && err.response.data.code
  if (config.data.code == 500 && config.data.msg == "NOT_LOGIN") {
    showToast(i18n.global.t("token"));
    localStorage.removeItem("Token-YUMO")
    localStorage.removeItem("Account-YUMO")
    window.location.reload();
  }
  return err;
})
export default request;