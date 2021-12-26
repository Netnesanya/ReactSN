// import styles from './users.module.css'
// import * as axios from "axios";
//
// let Users = (props) => {
//     getUsers = () => {
//
//     }
//         if (props.users.length ===0) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//         debugger;
//         props.setUsers(response.data.items)
//     });
// }
//     return (
//     <div className={styles.userItem}>
//         {props.users.map(u => <div key={u.id}>
//             <span>
//                 <div>
//                     <img alt='avatar' src={u.img} className={styles.userPhoto}/>
//                 </div>
//                 <div>
//                     {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
//                         : <button onClick={() => {props.follow(u.id)}} >Follow</button>}
//
//                 </div>
//             </span>
//             <span><div>{u.name}</div><div>{u.followers}</div></span>
//             <span><div>u.location</div>
//                 <div> </div></span>
//         </div>)}
//     </div>)}
//
// export default Users;