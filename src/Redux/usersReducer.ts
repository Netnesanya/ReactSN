import { followAPI, getUsersAPI } from "../API/api";
import {PhotosType, UsersType} from "../Types/Types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

//const SET_CURRENT_USER_PROFILE = "SET_CURRENT_USER_PROFILE"



let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 45,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users ids
};

type IninitalState = typeof initialState
export const usersReducer = (state = initialState, action: any):IninitalState => {
  switch (action.type) {
    default:
      return state;
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false, followers: --u.followers };
          }
          return u;
        }),
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true, followers: ++u.followers };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
  }
};


export let toggleFetching = (isFetching:boolean) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export let setCurrentPage = (currentPage:number) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export let setTotalUsersCount = (totalUsersCount:number) => ({
  type: SET_USERS_COUNT,
  totalUsersCount,
});
export let followSuccess = (id:number) => ({ type: FOLLOW, id });
export let setUsers = (users:UsersType) => ({ type: SET_USERS, users });
export let unfollowSuccess = (id: number) => ({ type: UNFOLLOW, id });
export let toggleFollowingInProgress = (isFetching:boolean, userId:number) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});
export let getUsersThunkCreator = (currentPage:number, pageSize:number) => {
  return (dispatch:any) => {

    dispatch(toggleFetching(true));
    dispatch(setCurrentPage(currentPage));

    getUsersAPI(currentPage, pageSize).then((data:any) => {
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(toggleFetching(false));
    });
  };
};
export let follow = (userId:number) => {
  return (dispatch:any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followAPI(userId).then((response:any) => {
      dispatch(unfollowSuccess(userId));
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};
export let unfollow = (userId:number) => {
  return (dispatch:any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followAPI(userId).then((response:any) => {
      dispatch(followSuccess(userId));
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};