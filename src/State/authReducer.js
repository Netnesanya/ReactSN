import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "SET_USER_DATA"





let initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
        case SET_USER_DATA: {

            return {

                ...state,
                ...action.payload
            }
        }}}

export let setUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, payload: {
        email,
        userId,
        login,
        isAuth
    }});

export const getAuthUserData = () => (dispatch) => {
     authAPI.me()
        .then(response => {
            if(response.data.resultCode ===0) {
                let userId = response.data.data.id
                let email = response.data.data.email
                let login = response.data.data.login

                dispatch(setUserData( email, userId, login, true))
            }})
}
export const loginVerification = (email, password, rememberMe) => (dispatch) => {

      authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {

                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                let action = stopSubmit('login', {_error: message});
                dispatch(action)
            }
        })
}
export const logout = () => (dispatch) => {
     authAPI.logout()
        .then(response => {
            if(response.data.resultCode ===0) {

                dispatch(setUserData(null, null, null, false))
            }})
}

