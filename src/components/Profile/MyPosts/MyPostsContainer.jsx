import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator,} from "../../../State/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     let newPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     };
//
//     return (
//         <MyPosts updateNewPostText={onPostChange} newPost={newPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
//     );
// };

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    // return {
    //     updateNewPostText: () => {
    //         dispatch(addPostActionCreator())
    //     },
    //     newPost: (text) => {
    //         let action = updateNewPostTextActionCreator(text);
    //         dispatch(action);
    //     }
    // }
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);

        },
        newPost: (text) => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
