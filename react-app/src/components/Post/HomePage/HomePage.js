import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getAllPosts } from "../../../store/posts";
import EditPostModal from "../EditPost";
import { deleteSinglePost } from "../../../store/posts";
import { GetAllComments } from "../../Comments/GetComments/GetComments";

export const AllPosts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const posts = useSelector((state) => state.posts);

  const postsArr = Object.values(posts).reverse();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!user) {
    history.push(`/login`);
  }

  const handleDelete = async (e, postId) => {
    e.preventDefault();
    await dispatch(deleteSinglePost(postId));
    history.push(`/`);
  };

  return (
    <main className="posts-main">
      <h1>Posts</h1>
      {postsArr.map((post) => (
        <div className="all-posts-container">
          <div className="post-username">{post?.username}</div>
          <div key={`single-post-link ${post?.id}`} to={`/posts/${post?.id}`}>
            <div className="post-images">
              <img
                height={400}
                width={400}
                alt={post?.image_url}
                src={post?.image_url}
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
                }
              />
            </div>
          </div>
          <div className="post-description">{post?.description}</div>
          <GetAllComments/>
          {user.id === post.user_id && (
            <div className="edit-delete-buttons">
              <EditPostModal postId={post?.id} />
              <button
                className="delete-review-button"
                onClick={(e) => handleDelete(e, post?.id)}
              >
                Delete Your Post
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};
