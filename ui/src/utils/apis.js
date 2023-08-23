import axios from "axios";
import { urls } from "./urls";

export const loginAPI = async () => {
  try {
    return await axios.post(urls.loginURL, {});
  } catch (err) {
    return err;
  }
};

export const signupAPI = async () => {
  try {
    return await axios.post(urls.signupURL, {});
  } catch (err) {
    return err;
  }
};

export const logoutAPI = async () => {
  try {
    return await axios.post(urls.logoutURL, {});
  } catch (err) {
    return err;
  }
};

export const getEventsAPI = async () => {
  try {
    return await axios.get(urls.getEvents);
  } catch (err) {
    return err;
  }
};

export const addEventAPI = async (payload) => {
  try {
    return await axios.post(urls.addEvent, { ...payload });
  } catch (err) {
    return err;
  }
};

export const editEventAPI = async () => {
  try {
    return await axios.put(urls.editEvent, {});
  } catch (err) {
    return err;
  }
};

export const deleteEventAPI = async () => {
  try {
    return await axios.delete(urls.deleteEvent);
  } catch (err) {
    return err;
  }
};
