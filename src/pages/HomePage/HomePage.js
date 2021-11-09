import React from "react";
import Post from "../../components/Post/Post";
import "./HomePage.css";
const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "Manage data in Docker",
      subtitle: "How to use volumes and bind mounts in Docker.",
      info: "Posted by Ocean Nguyen on May 20, 2019 · 8 mins read",
    },
    {
      id: 2,
      title: "How to create a Docker image",
      subtitle: "Easy steps to build a Docker image with Dockerfile.",
      info: "Posted by Ocean Nguyen on May 11, 2019 · 8 mins read",
    },
  ];
  return (
    <div className="home">
      <div className="container">
        <div className="col-lg-8 col-md-10 mx-auto">
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              info={post.info}
            />
          ))}
          <div className="clearfix">
            <a className="button" href="/posts">
              View All Posts →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
