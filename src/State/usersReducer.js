import {followAPI, getUsersAPI} from "../API/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_COUNT = "SET_USERS_COUNT"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS"

//const SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE"

let initialState = {
    users : [],
    pageSize: 45,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false, followers: --u.followers}
                    }
                    return u;
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true, followers: ++u.followers}
                    }
                    return u;
                })
            }
        case SET_USERS: {

            return {

                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_FETCHING : {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS : {
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

    }
}
export let toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount })
export let followSuccess = (id) => ({type: FOLLOW, id});
export let setUsers = (users) => ({type: SET_USERS, users});
export let unfollowSuccess = (id) => ({type: UNFOLLOW, id});
export let toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })
export let getUsersThunkCreator = (currentPage, pageSize) => {
    debugger;
    return (dispatch) => {
        console.log(dispatch)
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(currentPage))

    getUsersAPI(currentPage, pageSize).then(data => {
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
        dispatch(toggleFetching(false))

    });
}}
export let follow = (userId) => {
    return (dispatch) => {
       dispatch( toggleFollowingInProgress(true, userId))
        followAPI(userId)
            .then(response => {
                dispatch(unfollowSuccess(userId))
                dispatch( toggleFollowingInProgress(false, userId))
            });
}}
export let unfollow = (userId) => {
    return (dispatch) => {
       dispatch( toggleFollowingInProgress(true, userId))
        followAPI(userId)
            .then( response => {
                dispatch(followSuccess(userId))
                dispatch( toggleFollowingInProgress(false, userId))
            });
}}