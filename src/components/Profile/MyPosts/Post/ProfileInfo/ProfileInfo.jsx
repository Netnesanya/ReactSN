import React, { useState } from "react";
import Preloader from "../../../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import p from "./Profile.module.css";
import { savePhoto } from "../../../../../State/profileReducer";
import { ReduxProfileDataForm } from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  isOwner,
  status,
  updateStatus,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const profilePictureSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  let onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div className={p.infoText}>
      <ProfileStatus status={status} updateStatus={updateStatus} />
      <img
        alt="on vacation"
        src={
          profile.photos.large !== null
            ? profile.photos.large
            : "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024"
        }
      />
      {isOwner && <input type={"file"} onChange={profilePictureSelected} />}
      {editMode ? (
        <ReduxProfileDataForm
          profile={profile}
          initialValues={profile}
          onSubmit={onSubmit}
          leaveEditMode={() => setEditMode(false)}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          enableEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      {/*<ProfileData profile={profile}/>*/}
    </div>
  );
};
const ProfileData = ({ profile, isOwner, enableEditMode }) => {
  return (
    <div>
      <div>
        {isOwner && (
          <div>
            <button onClick={enableEditMode}>Edit</button>
          </div>
        )}
        <h3> About me: {profile.aboutMe}</h3>
        <b> My name: {profile.fullName}</b>
      </div>
      <div>
        <b> Looking for a job {profile.lookingForAJob ? ": yes" : ": no"}</b>
        <div>
          <b> My skills: {profile.lookingForAJob.lookingForAJobDescription}</b>
        </div>
        <div>
          <b> Contacts:</b>{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  if (contactValue !== null && contactValue !== "") {
    return (
      <div className={p.contacts}>
        <b>{contactTitle}:</b>{" "}
        <span className={p.contactValue}>{contactValue}</span>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ProfileInfo;