import {getAuthUserData} from "./authReducer";
const SET_INITIALIZED = "SET_INITIALIZED"


let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
        case SET_INITIALIZED: {

            return {
                ...state,
                initialized:true,
            }}}}

export let initSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
.then(() => {
    dispatch(initSuccess());
})}

