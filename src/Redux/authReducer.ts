import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA_AUTH_REDUCER";

export type InitialStateType = {
    email: string | null,
    userId: number | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: InitialStateType = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action: SetUserDataActionType): InitialStateType => {
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

type SetUserDataPayloadType = {
    email: string | null,
    userId: number | null,
    login: string | null,
    isAuth: boolean,
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataPayloadType
}

export let setUserData = (email: string | null, userId: number | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        email,
        userId,
        login,
        isAuth,
    },
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let userId = response.data.data.id;
        let email = response.data.data.email;
        let login = response.data.data.login;

        dispatch(setUserData(email, userId, login, true));
    }
};
export const loginVerification =
    (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message =
                response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    };
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

