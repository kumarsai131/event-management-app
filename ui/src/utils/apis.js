import axios from "axios";
import { urls } from "./urls";

export const loginAPI = async () => {
  try {
    return await axios.post(urls.loginURL, {});
  } catch (err) {
    return Promise.reject(err);
  }
};

export const signupAPI = async (payload) => {
  try {
    return await axios.post(urls.signupURL, { ...payload });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const logoutAPI = async () => {
  try {
    return await axios.post(urls.logoutURL, {});
  } catch (err) {
    return Promise.reject(err);
  }
};

export const verifyOtpAPI = async (payload) => {
  try {
    return await axios.post(urls.verifyOtpURL, { ...payload });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getEventsAPI = async () => {
  try {
    return await axios.get(urls.getEvents);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addEventAPI = async (payload) => {
  try {
    return await axios.post(urls.addEvent, { ...payload });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const editEventAPI = async ({ id, name }) => {
  try {
    return await axios.put(urls.editEvent, { id, name });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEventAPI = async (id) => {
  try {
    return await axios.delete(urls.deleteEvent + `?id=${id}`);
  } catch (err) {
    return Promise.reject(err);
  }
};
