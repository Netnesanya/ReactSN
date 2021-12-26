import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let newPost = () => {
        props.newPost()

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    let postElements = props.postData.map((element) => (
        <Post id={element.id} message={element.message} key ={element.id} likes={element.likes}/>));
    return (<div>
      <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
      >What's new? </textarea>
            <div>
                <button onClick={newPost}>New Post</button>
                <div className={p.profile}>{postElements}</div>
            </div>
        </div>);
};

export default MyPosts;
