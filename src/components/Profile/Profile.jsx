import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div className={p.info}>
        <ProfileInfo
          isOwner={props.isOwner}
          profile={props.profile}
          saveProfile={props.saveProfile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto}
        />
      </div>
      <div className={p.profile}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
