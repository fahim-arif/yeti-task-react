import {
  CREATE_NOTE_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  LIST_NOTE_FAIL,
  LIST_NOTE_REQUEST,
  LIST_NOTE_SUCCESS,
} from "../types/noteTypes";

export const noteListReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case LIST_NOTE_REQUEST:
      return { loading: true };
    case LIST_NOTE_SUCCESS:
      return {
        loading: false,
        list: action.payload,
      };
    case LIST_NOTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const noteCreateReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case CREATE_NOTE_REQUEST:
      return { loading: true };
    case CREATE_NOTE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case CREATE_NOTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
