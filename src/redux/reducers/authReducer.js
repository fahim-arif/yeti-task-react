import { IS_AUTHENTICATED } from "../actions/types";
import {
  USER_CREATE_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_RESET_PASS_FAIL,
  USER_RESET_PASS_REQUEST,
  USER_RESET_PASS_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../types/userTypes";

const initialState = {
  isAuthenticated: false,
  userRole: "none",
  authenticated: false,
};

export const userCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { loading: true };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userData: action.payload,
        authenticated: true,
      };
    case USER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
        userData: action.userData,
        authenticated: action.isAuth,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userData: null,
        authenticated: null,
      };
    default:
      return state;
  }
};

// export const userLogoutReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOGOUT_REQUEST:
//       return { loading: true };

//     case USER_LOGOUT_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const updateUserReducer = (state = { userUpdate: [] }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userUpdate: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, erorr: action.payload };
    default:
      return state;
  }
};

export const passwordResetReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESET_PASS_REQUEST:
      return { loading: true };
    case USER_RESET_PASS_SUCCESS:
      return { loading: false, resetUser: action.payload };
    case USER_RESET_PASS_FAIL:
      return { loading: false, erorr: action.payload };
    default:
      return state;
  }
};
