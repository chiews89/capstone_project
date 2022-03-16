import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllPosts } from "../../../store/posts";
import { CreatePost } from "../CreatePost/CreatePost";

export const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const postsArr = Object.values(posts);
  console.log("postsArr", postsArr);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <main className="posts-main">
      <>
      {CreatePost}
      </>
      <h1>Posts</h1>
      {postsArr.map((post) => (
        <div className="all-posts-container">
          <div className="post-username">{post?.username}</div>
          <Link key={`single-post-link ${post?.id}`} to={`/posts/${post?.id}`}>
            <div className="post-images">
              <img
                height={300}
                width ={300}
                alt={post?.id}
                src={
                  post?.image_url
                    ? post?.image_url
                    : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
                }
              />
            </div>
          </Link>
          <div className="post-description">{post?.description}</div>
        </div>
      ))}
    </main>
  );
};
