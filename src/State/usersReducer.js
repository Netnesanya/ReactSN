import {followAPI, getUsersAPI} from "../API/api";

const FOLLOW = "FOLLOW_USERS_REDUCER"
const UNFOLLOW = "UNFOLLOW_USERS_REDUCER"
const SET_USERS = "SET_USERS_USERS_REDUCER"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE_USERS_REDUCER"
const SET_USERS_COUNT = "SET_USERS_COUNT_USERS_REDUCER"
const TOGGLE_FETCHING = "TOGGLE_FETCHING_USERS_REDUCER"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS_USERS_REDUCER"

//const SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE"

let initialState = {
    users: [],
    pageSize: 20,
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
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

    }
}
export let toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_COUNT, totalUsersCount})
export let followSuccess = (id) => ({type: FOLLOW, id});
export let setUsers = (users) => ({type: SET_USERS, users});
export let unfollowSuccess = (id) => ({type: UNFOLLOW, id});
export let toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})
export let getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await getUsersAPI(currentPage, pageSize);
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
        dispatch(toggleFetching(false))
    }}
export let follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followAPI(userId)
        dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }}
export let unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followAPI(userId)
        dispatch(followSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }}