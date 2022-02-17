import Preloader from "../common/Preloader";
import {connect} from "react-redux";
import {follow,setUsers,unfollow,setCurrentPage,setTotalUsersCount,
    toggleFetching, toggleFollowingInProgress, getUsersThunkCreator,
} from "../../Redux/usersReducer";
import React, {useState} from "react";
import Users from "./Users";
import { followAPI } from "../../API/api";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";
import {setStatus} from "../../Redux/profileReducer";
import styles from './users.module.css'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   followAPI ={followAPI}
                   followingInProgress={this.props.followingInProgress}
                   getUsers = {this.props.getUsers}
                   onPageChanged={(pageNumber) => { this.props.getUsers(pageNumber, this.props.pageSize)}}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
            </>
            }}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(
    mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleFetching, toggleFollowingInProgress, getUsers: getUsersThunkCreator }))(UsersContainer)

