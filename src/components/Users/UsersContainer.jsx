//import Users from "./Users";
//import Users from "./UsersAPIComponent.jsx";
import Preloader from "../common/Preloader";
import {connect} from "react-redux";
import {follow,setUsers,unfollow,setCurrentPage,setTotalUsersCount,
    toggleFetching, toggleFollowingInProgress, getUsersThunkCreator,
} from "../../State/usersReducer";
import React from "react";
import Users from "./Users";
import { followAPI } from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   followAPI ={followAPI}
                   followingInProgress={this.props.followingInProgress}
                   onPageChanged={(pageNumber) => { this.props.getUsers(pageNumber, this.props.pageSize)}}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
            </>
            }}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleFetching, toggleFollowingInProgress, getUsers: getUsersThunkCreator })(UsersContainer);