import React, {useEffect, useState} from "react";


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let enterEditMode = () =>{
        setEditMode(true)
    };
    let leaveEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    };

    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

   const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span
                        onDoubleClick={enterEditMode}
                    > {props.status} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={leaveEditMode}
                        onChange={onStatusChange}
                           value={status}
                        // onFocus={}

                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatus;