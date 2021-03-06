import styles from './users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

import {followAPI} from "../../API/api";

let Users = (props) => {

    window.props = props
    return (

        <div className={styles.userItem}>
            <Paginator
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={(pageNumber) => { props.getUsers(pageNumber, props.pageSize)}}
            />
            {props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.userPhoto}>
                    <NavLink to={`/profile/${u.id}`}>
                    <img alt='avatar'
                         src={u.photos.small != null ? u.photos.small : "https://wallpaperaccess.com/full/4578033.jpg"}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>props.follow(u.id)}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>props.unfollow(u.id)}>Follow</button>}

                </div>

            </span>
                <span><div>{u.name}</div></span>
                <span><div>{u.location}</div>
                <div> </div></span>
            </div>)}
        </div>)
}



export default Users;