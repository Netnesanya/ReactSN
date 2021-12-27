import {authAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA"
//const IS_AUTH = 'IS_AUTH'




let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    data: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }}}}

export let setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: userId, email, login});

export const getAuthUserData = () => (dispatch) => {
    return  authAPI()
        .then(response => {
            if(response.data.resultCode ===0) {
                dispatch(setUserData(response.data.data))
            }})
}

