import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";
import { api_url } from "../../utils/api";
import qs from "qs";

import {
  LIST_NOTE_FAIL,
  LIST_NOTE_REQUEST,
  LIST_NOTE_SUCCESS,
  CREATE_NOTE_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
} from "../types/noteTypes";

export const listNote = () => async (dispatch, getState) => {
  try {
    const {
      auth: {
        userData: { token },
      },
    } = getState();

    dispatch({ type: USER_CREATE_REQUEST });

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/note-list",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios(config);

    await dispatch({ type: LIST_NOTE_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({
      type: LIST_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNote = (finalData) => async (dispatch, getState) => {
  try {
    const {
      auth: {
        userData: { token },
      },
    } = getState();

    dispatch({ type: CREATE_NOTE_REQUEST });

    const config = {
      method: "post",
      url: "http://dev7.invitocreatives.com//api/notes",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      data: finalData,
    };

    const { data } = await axios(config);

    await dispatch({ type: CREATE_NOTE_SUCCESS, payload: data.payload });
  } catch (error) {
    dispatch({
      type: CREATE_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
