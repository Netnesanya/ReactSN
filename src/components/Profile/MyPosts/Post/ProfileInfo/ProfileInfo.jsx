import React  from 'react';
import Preloader from "../../../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import p from './Profile.module.css'


const ProfileInfo = (props) => {
//let contacts = props.profile.contacts.map(c => {<div>{c.vk},{c.instagram}</div>})

    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div className={p.infoText}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <img alt ='on vacation' src ={props.profile.photos.large != null ? props.profile.photos.large: 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024' }></img>
            <div>{props.profile.aboutMe}</div>
         {/*{//contacts}*/}
            <div>

            </div>

        </div>
        
    )
}

export default ProfileInfo;