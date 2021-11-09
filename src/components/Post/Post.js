import React from "react";
import "./Post.css";
const Post = ({ title, subtitle, info }) => {
  return (
    <div className="post-preview">
      <a href="/postdetails?id">
        <h2 className="post-title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </a>
      <p className="post-meta">{info}</p>
    </div>
  );
};
export default Post;
