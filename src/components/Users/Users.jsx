import styles from './users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingInProgress} from "../../State/usersReducer";

let Users = (props) => {
    window.props = props

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }
    return (

        <div className={styles.userItem}>
            <div>
                {pages.map(p => {
                    return <button onClick={() => {
                        props.onPageChanged(p)
                    }}>
                        <span className={props.currentPage === p && styles.selectedPage}>{p}</span></button>
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.userPhoto}>
                    <NavLink to={`/profile/${u.id}`}>
                    <img alt='avatar'
                         src={u.photos.small != null ? u.photos.small : "https://wallpaperaccess.com/full/4578033.jpg"}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>props.unfollow(u.id)}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>props.unfollow(u.id)}>Follow</button>}

                </div>
            </span>
                <span><div>{u.name}</div></span>
                <span><div>u.location</div>
                <div> </div></span>
            </div>)}
        </div>)
}



export default Users;