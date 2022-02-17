import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostDataType, ProfileType} from "../Types/Types";

const SAVE_PHOTO = "SAVE_PHOTO";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT_PROFILE_REDUCER";
const ADD_POST = "ADD_POST_PROFILE_REDUCER";
const SET_USER_PROFILE = "SET_USER_PROFILE_PROFILE_REDUCER";
const SET_STATUS = "SET_STATUS_PROFILE_REDUCER";
const DELETE_POST = "DELETE_POST_PROFILE_REDUCER";
const SAVE_PROFILE = "SAVE_PROFILE";


type InitialStateType = typeof initialState

let initialState = {
  postData: [
    {id: 1, message: "post Number 1", likes: 2},
    {id: 2, message: "post Number 2", likes: 12},
    {id: 3, message: "post Number 3", likes: 52},
    {id: 4, message: "post Number 4", likes: 34},
  ] as Array<PostDataType>,
  newPostText: "What's new?",
  profile: null as ProfileType | null,
  status: "",
};

export const profileReducer = (state = initialState, action: any) : InitialStateType => {
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
        profile: {...state.profile, photos: action.file} as ProfileType,
      };
      // case SAVE_PROFILE:
      //     return {
      //         ...state, profile: {...state.profile }
      //     }
  }
};
type AddPostActionCreatorType = {
  type:  typeof ADD_POST
  newPostBody:string
}
export let addPostActionCreator = (newPostBody:string):AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostBody,
});

type SetUserActionCreatorType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export let setUserProfile = (profile:ProfileType):SetUserActionCreatorType => ({type: SET_USER_PROFILE, profile});

type setStatusActionCreatorType = {
  type: typeof SET_STATUS
  status:string
}
export let setStatus = (status:string):setStatusActionCreatorType => ({type: SET_STATUS, status});

type deletePostActionCreatorType = {
  type: typeof DELETE_POST
  postId: number
}
export let deletePost = (postId:number):deletePostActionCreatorType => ({type: DELETE_POST, postId});

type savePhotoActionCreatorType = {
  type: typeof SAVE_PHOTO
  file: PhotosType
}
export let savePhotoSuccess = (file: any):savePhotoActionCreatorType => ({type: SAVE_PHOTO, file});

// type saveProfileSuccessCreatorType = {
//   type: typeof SAVE_PROFILE
// }
// export let saveProfileSuccess = (profileData) => ({type: SAVE_PROFILE, profileData});

export let getUserProfile = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};
export let saveProfile = (profileData:ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profileData);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    // dispatch(stopSubmit('ProfileDataForm', {_error: response.message}))
    // let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
    // console.log(message)
    dispatch(
        stopSubmit("ProfileDataForm", {_error: response.data.messages[0]})
    );
    return Promise.reject(response.data.messages[0]);
  }
};

export let savePhoto = (file:PhotosType) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(file);

  dispatch(savePhotoSuccess(response.data.data.photos));
};
export let getStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};
export let updateStatus = (status:string) => async (dispatch:any) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export let updateNewPostTextActionCreator = (text:string) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
    