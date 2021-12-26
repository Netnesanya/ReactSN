import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React  from 'react';



const Profile = (props) => {
  
  return (
    <div>
      <div className={p.info}>
        <ProfileInfo profile={props.profile} />
      </div>
      <div className={p.profile}>
        <MyPostsContainer

        />
      </div>
    </div>
  );
};

export default Profile;
