import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, required, } from '../../../tools/validators/validators'
import {TextArea} from "../../common/formsControl/FormsControl";

let maxLength = maxLengthCreator(300)


const NewPostForm = (props) => {
    return (
        <div>
            <h1></h1>
            <form onSubmit={props.handleSubmit}>
                <div> <Field  placeholder={'Send new message'} name={'newPostBody'} component={TextArea} validate={[required, maxLength ]}/> </div>

                <div> <button>Send</button> </div>
            </form>
        </div>
    )}

const ReduxNewPostForm = reduxForm ({form: 'newPostForm'}) (NewPostForm)

const NewPost = (props) => {


    const onSubmit = (values) => {
        // console.log(values.newMessageBody)
        props.newPost(values.newPostBody)
    }
    return (
        <div>
            <ReduxNewPostForm onSubmit = {onSubmit}/>
        </div>
    )}


const MyPosts =React.memo ( props => {


    let postElements = props.postData.map((element) => (
        <Post id={element.id} message={element.message} key ={element.id} likes={element.likes}/>)).reverse();



    return (<div>
        <div> {postElements} </div>
      <NewPost newPost={props.newPost} />
        </div>);
});

export default MyPosts;







