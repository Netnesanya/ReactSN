import p from "./Post.module.css";
import React  from 'react';

const Post = (props) => {
  return (
    <div>
      <div className={p.item}>
        <img
          alt="avatar"
          src="https://scontent.fppk1-1.fna.fbcdn.net/v/t1.18169-9/20155738_449359308780823_4393595202072702417_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFtOXf9HkfghPPMLub0vrTCmkAaUrqExySaQBpSuoTHJPWVyQEuzPTtmVyqEGQnYxMA65ZLv7fii_wbRMRITy2H&_nc_ohc=F03RX1VcxPAAX92TfCM&_nc_ht=scontent.fppk1-1.fna&oh=414940a7f4627e4e69f2cf01b24683da&oe=61D7C687"
        />
        {props.message}
      </div>
      <span className={p.likeStyle}> ❤ </span>
      <span className={p.item}>{props.likes}</span>
    </div>
  );
};

export default Post;
