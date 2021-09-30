import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";
import { IS_AUTHENTICATED } from "./types";
import { api_url } from "../../utils/api";
import qs from "qs";

import {
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_UPDATE_REQUEST,
  USER_RESET_PASS_REQUEST,
  USER_RESET_PASS_SUCCESS,
  USER_RESET_PASS_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_UPDATE_SUCCESS,
} from "../types/userTypes";

export const createUser = (finalData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CREATE_REQUEST });

    // const {
    //   auth: {
    //     userData: { token },
    //   },
    // } = getState();

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/verify-otp",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Authorization: `Bearer ${token}`,
      },
      data: finalData,
    };

    const { data } = await axios(config);
    setAuthToken(data.payload.token);
    localStorage.setItem("jwtToken", JSON.stringify(data.payload.token));
    console.log(data);
    console.log(data.payload.token);

    await dispatch({ type: USER_CREATE_SUCCESS, payload: data.payload });
    await dispatch({
      type: IS_AUTHENTICATED,
      payload: true,
      userData: data.payload,
    });
  } catch (error) {
    dispatch({
      type: USER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogin = (user, history) => (dispatch) => {
  axios
    .post(api_url + "/api/login", user)
    .then((res) => {
      console.log("user =>", res.data.status);

      if (res.data.status === false) {
        return toast.error(res.data.message);
      }
      if (res.data.status === true) {
        const {
          token,
          email,
          username,
          mobile,
          n_is_subscribe,
          u_customer_id,
          n_subscribe_start_date,
          n_subscribe_end_date,
        } = res.data.payload;

        const userdata = {
          token,
          email,
          username,
          mobile,
          n_is_subscribe,
          u_customer_id,
          n_subscribe_start_date,
          n_subscribe_end_date,
        };
        console.log("role :", res.data);
        setAuthToken(token);
        localStorage.setItem("jwtToken", token);

        dispatch({
          type: IS_AUTHENTICATED,
          payload: true,
          userData: userdata,
        });
        toast.success("Logged in successfully");
        window.location.replace("/");
      }
    })
    .catch((err) => console.log(err));
};

// Fahim Part

export const logout = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    const {
      auth: {
        userData: { token },
      },
    } = getState();

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/logout",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios(config);
    console.log(data);

    // console.log(api_url + "/api/logout");

    // axios.post(api_url + "/api/logout").catch(function (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", error.message);
    //   }
    //   console.log(error.config);
    // });

    // const { data } = await axios.post(api_url + "/api/logout");

    localStorage.removeItem("jwtToken");

    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userUpdate = (finalData) => async (dispatch, getState) => {
  try {
    console.log("hi fahim");
    dispatch({ type: USER_UPDATE_REQUEST });

    const {
      auth: {
        userData: { token },
      },
    } = getState();

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/update-profile",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      data: finalData,
    };

    const { data } = await axios(config);
    await dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    await dispatch({
      type: IS_AUTHENTICATED,
      payload: true,
      userData: data.payload,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetPassword = (finalData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_RESET_PASS_REQUEST });

    const {
      auth: {
        userData: { token },
      },
    } = getState();

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/change-password",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      data: finalData,
    };

    const { data } = await axios(config);
    dispatch({ type: USER_RESET_PASS_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: USER_RESET_PASS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sendOTP = (finalData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_RESET_PASS_REQUEST });

    const {
      auth: {
        userData: { token },
      },
    } = getState();

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/change-password",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      data: finalData,
    };

    const { data } = await axios(config);
    dispatch({ type: USER_RESET_PASS_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: USER_RESET_PASS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
