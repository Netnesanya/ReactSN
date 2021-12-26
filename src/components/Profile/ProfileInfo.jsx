import React  from 'react';
import Preloader from "../common/Preloader";



const ProfileInfo = (props) => {
//let contacts = props.profile.contacts.map(c => {<div>{c.vk},{c.instagram}</div>})
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <img alt ='on vacation' src ={props.profile.photos.large}></img>
            <div>{props.profile.aboutMe}</div>
         {/*{//contacts}*/}
            <div></div>
        </div>
        
    )
}

export default ProfileInfo;