import { profileAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SAVE_PHOTO = "SAVE_PHOTO";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT_PROFILE_REDUCER";
const ADD_POST = "ADD_POST_PROFILE_REDUCER";
const SET_USER_PROFILE = "SET_USER_PROFILE_PROFILE_REDUCER";
const SET_STATUS = "SET_STATUS_PROFILE_REDUCER";
const DELETE_POST = "DELETE_POST_PROFILE_REDUCER";
const SAVE_PROFILE = "SAVE_PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "post Number 1", likes: 2 },
    { id: 2, message: "post Number 2", likes: 12 },
    {
      id: 3,
      message: "post Number 3",
      likes: 52,
    },
    { id: 4, message: "post Number 4", likes: 34 },
  ],
  newPostText: "What's new?",
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_POST:
      let message = action.newPostBody;
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length + 1,
            message: message,
            likes: 0,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.file },
      };
    // case SAVE_PROFILE:
    //     return {
    //         ...state, profile: {...state.profile }
    //     }
  }
};
export let addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setStatus = (status) => ({ type: SET_STATUS, status });
export let deletePost = (postId) => ({ type: DELETE_POST, postId });
export let savePhotoSuccess = (file) => ({ type: SAVE_PHOTO, file });
export let saveProfileSuccess = (profileData) => ({
  type: SAVE_PROFILE,
  profileData,
});

export let getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};
export let saveProfile = (profileData) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profileData);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    // dispatch(stopSubmit('ProfileDataForm', {_error: response.message}))
    // let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
    // console.log(message)
    dispatch(
      stopSubmit("ProfileDataForm", { _error: response.data.messages[0] })
    );
    return Promise.reject(response.data.messages[0]);
  }
};

export let savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  dispatch(savePhotoSuccess(response.data.data.photos));
};
export let getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};
export let updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
    