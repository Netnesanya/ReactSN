import React from "react";
import {Field, reduxForm} from "redux-form"
import {Input} from "../../../../common/formsControl/FormsControl";
import {required} from "../../../../../tools/validators/validators";

const ProfileDataForm = ({profile, cancelEditMode, saveEditMode, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={saveEditMode}>Save Changes</button>
            <button onClick={cancelEditMode}>Leave Edit Mode</button>
        </div>
        <div>
            <h3> About me: {profile.aboutMe}</h3><Field placeholder={profile.aboutMe || `About Me` } name={'aboutMe'} component={Input} />
            <b> {profile.fullName}</b> : <Field placeholder={profile.fullName} name={'fullName'} component={Input} validate={[required]}/>
        </div>
        <div>
            <b> Looking for a job {profile.lookingForAJob ? ": yes" : ': no'}</b> <Field type={'checkbox'} placeholder={profile.lookingForAJob} name={'lookingForAJob'} component={Input} />
            <div>
                <b> My skills: {profile.lookingForAJob.lookingForAJobDescription}</b>  <Field placeholder={profile.lookingForAJob.lookingForAJobDescription || `My Skills`} name={'lookingForAJobDescription'} component={Input} />
            </div>
            {/*<div>*/}
            {/*    <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </div>
    </form>
}
export const ReduxProfileDataForm = reduxForm ({form: 'ProfileDataForm'}) (ProfileDataForm)

