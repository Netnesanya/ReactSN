import styles from './users.module.css'
// import * as axios from "axios";
// import React from "react";
// import Users from "./Users";
//
// class UsersAPIComponent extends React.Component {
//
//     componentDidMount() {
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setTotalUsersCount(response.data.totalCount)
//             this.props.setUsers(response.data.items)
//         });
//     }
//
//     // onPageChanged(pageNumber) {
//     //
//     //     this.props.setCurrentPage(pageNumber)
//     //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//     //
//     //         this.props.setUsers(response.data.items)
//     //     });
//     // }
//
//     render() {
//
//         return <Users totalUsersCount={this.props.totalUsersCount}
//                       pageSize={this.props.pageSize}
//                       onPageChanged={(pageNumber) => {this.props.setCurrentPage(pageNumber)
//                           axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//                               this.props.setUsers(response.data.items)
//                           });}}
//                       currentPage={this.props.currentPage}
//                       users={this.props.users}
//                       unfollow={this.props.unfollow}
//                       follow={this.props.follow}/>
//
//
//     }
// }
//
// export default UsersAPIComponent;