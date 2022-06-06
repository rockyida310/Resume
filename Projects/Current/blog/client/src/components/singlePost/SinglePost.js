import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImage"
            src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <h1 className="singlePostTitle">
              Lorem ipsum dolor sit amet consectetur.
              <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"/>
                  <i className="singlePostIcon far fa-trash-alt"/>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor" >Author: <b>rockyida</b> </span>
              <span className="singlePostDate" >Date: <b>1 hour ago</b> </span>
          </div>
          <p className="singlePostDescription">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur vel atque at sit veritatis excepturi obcaecati sunt temporibus aliquam magnam perspiciatis est, facere neque explicabo eligendi! Minus laudantium delectus eveniet dolor doloribus! Esse rerum, perspiciatis accusantium adipisci hic sequi fuga, eaque ad cupiditate, labore blanditiis laborum officiis amet incidunt. Itaque ratione necessitatibus earum sequi, enim doloribus quis eaque dolor neque, debitis eos in hic possimus iste maiores illum omnis quasi ab minima? Necessitatibus error obcaecati debitis at qui deserunt reiciendis voluptatibus voluptates tenetur est atque eos cumque ratione iste laudantium porro architecto magni et nemo illo, maxime nostrum nulla? Commodi corrupti saepe nulla exercitationem debitis nostrum error nihil et provident iure, quibusdam odio rerum dolorem deleniti aspernatur alias, architecto deserunt maxime possimus incidunt animi inventore at tenetur! Fuga repellendus quaerat molestias nostrum quae! Eligendi eos nobis magnam a voluptatibus quisquam eaque ex. Ipsa officiis ducimus laudantium mollitia! Qui aperiam veritatis, dignissimos, placeat corporis libero ipsam minima architecto autem voluptas consequatur facilis maiores incidunt ullam? Sapiente cupiditate sed magni repellat officia ea consequatur laborum rem corrupti, qui sit dolorem mollitia eveniet perspiciatis molestias illo doloribus vel assumenda omnis aliquam odit, quae molestiae, ab excepturi. Necessitatibus ex fugiat praesentium eius tenetur. Natus.
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default SinglePost;
