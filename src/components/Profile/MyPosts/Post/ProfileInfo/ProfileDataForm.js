import React from "react";
import p from './Profile.module.css'
import {Field, reduxForm} from "redux-form"
import {Input} from "../../../../common/formsControl/FormsControl";
import {required} from "../../../../../tools/validators/validators";
import style from "../../../../common/formsControl/FormsControl.module.css";

const ProfileDataForm = ({profile, cancelEditMode, saveEditMode, handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={saveEditMode}>Save Changes</button>
            <button onClick={cancelEditMode}>Leave Edit Mode</button>
            {error !== undefined ? <div className={style.profileFormError}> {error} </div> : <div> Saved </div>}

        </div>
        <div>
            <h3> About me: </h3><Field name={'aboutMe'} component={Input}/>
            <b> My name</b> : <Field name={'fullName'} component={Input} validate={[required]}/>
        </div>
        <div>
            <b> Looking for a job </b> <Field type={'checkbox'} name={'lookingForAJob'} component={Input}/>
            <div>
                <b> My skills</b> <Field name={'lookingForAJobDescription'} component={Input}/>
            </div>
            <div>
                <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={p.contacts}><b>
                    {key}: <Field name={"contacts." + key} component={Input} initialValues={profile}/>

                </b></div>
            })}
            </div>
        </div>
    </form>
}
export const ReduxProfileDataForm = reduxForm({form: 'ProfileDataForm'})(ProfileDataForm)

