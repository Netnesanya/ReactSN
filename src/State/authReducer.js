import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA_AUTH_REDUCER";

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};

export let setUserData = (email, userId, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    email,
    userId,
    login,
    isAuth,
  },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let userId = response.data.data.id;
    let email = response.data.data.email;
    let login = response.data.data.login;

    dispatch(setUserData(email, userId, login, true));
  }
};
export const loginVerification =
  (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

