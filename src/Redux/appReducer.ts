import { getAuthUserData } from "./authReducer";
const SET_INITIALIZED = "SET_INITIALIZED_APP_REDUCER";


type InitialStateType = {
  initialized: boolean,
}

let initialState: InitialStateType = {
  initialized: false,
};

export const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return state;
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
  }
};

type InitSuccess = {
  type: typeof SET_INITIALIZED;
}

export let initSuccess = () : InitSuccess => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initSuccess());
  });
};

