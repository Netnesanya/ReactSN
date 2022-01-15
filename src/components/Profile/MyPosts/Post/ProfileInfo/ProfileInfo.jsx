import React from 'react';
import Preloader from "../../../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import p from './Profile.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const profilePictureSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={p.infoText}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <img alt='on vacation'
                 src={props.profile.photos.large != null ? props.profile.photos.large : 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024'}></img>
            {props.isOwner && <input type={'file'} onChange={profilePictureSelected}/>}
            <div>
                <div>
                    <h3> About me: {props.profile.aboutMe}</h3>
                    <b>  {props.profile.fullName}</b>
                </div>
                <div>
                    <b> Looking for a job {props.profile.lookingForAJob ? ": yes" : ': no'}</b>
                    <div>
                        <b> My skills: {props.profile.lookingForAJob.lookingForAJobDescription}</b>
                    </div>
                    <div>
                        <b> Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>}) }
                    </div>
                </div>
            </div>
        </div>

    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;