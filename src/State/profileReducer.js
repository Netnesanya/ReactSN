import {profileAPI} from "../API/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [{id: 1, message: "post Number 1", likes: 2}, {id: 2, message: "post Number 2", likes: 12}, {
        id: 3, message: "post Number 3", likes: 52
    }, {id: 4, message: "post Number 4", likes: 34},], newPostText: "What's new?",
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
        case ADD_POST:
            let message = state.newPostText;
            return {
                ...state, newPostText: '', postData: [...state.postData, {
                    id: state.postData.length + 1, message: message, likes: 0,
                }]

            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
    }

}
export let addPostActionCreator = () => ({type: ADD_POST});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile } )
export let setStatus = (status) => ({type: SET_STATUS, status})

export let getUserProfile = (userId) => ((dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
} )
export let getStatus = (userId) => ((dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })})
export let updateStatus = (status) => ((dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
            }})})
export let updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text,
});
    