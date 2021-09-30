import { combineReducers } from "redux";
import {
  authReducer,
  updateUserReducer,
  userLogoutReducer,
  passwordResetReducer,
  userCreateReducer,
} from "./authReducer";
import { noteListReducer,  } from "./noteReducer";

export default combineReducers({
  auth: authReducer,
  passwordReset: passwordResetReducer,
  updateUser: updateUserReducer,
  userCreate: userCreateReducer,
  // userLogout: userLogoutReducer,
});
