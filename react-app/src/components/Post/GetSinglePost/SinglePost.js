import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { GetAllComments } from "../../Comments/GetComments/GetComments";
import { CreateNewComment } from "../../Comments/CreateComment/CreateComment";
import DeletePostModal from "../DeletePost";
import "./SinglePost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { addALike, removeALike } from "../../../store/likes";

export const SinglePost = ({ post, setShowModal }) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const likes = Object.values(useSelector((state) => state.likes));

  const filteredLikes = likes.filter((like) => {
    return like.post_id === post.id;
  });

  const userLiked = filteredLikes.filter((like) => {
    return like.user_id === user.id
  })

  const slicedFilter = filteredLikes.reverse().slice(0, 1);

  if (!user) {
    history.push("/login");
  }

  if (!post) {
    return null;
  }

  const newLikeSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      user_id: user.id,
      post_id: post.id,
    }
    dispatch(addALike(payload))
  }

  const removeLikeSubmit = async (e) => {
    e.preventDefault()
    dispatch(removeALike(userLiked[0].id))
  }

  return (
    <div className="post-detail-container">
      <img
        className="single-post-image"
        alt={""}
        src={post?.image}
        onError={(e) =>
          (e.target.src =
            "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
        }
      />
      <div className="single-post-description-text-display">
        <div className="single-post-username ">
          <div className="single-post-user">
            <i className="fa-solid fa-circle-user"></i>
            <div className="single-post-username-display">
              <NavLink to={`/users/${post.user_id}`}>{post?.username}</NavLink>
            </div>
          </div>
          {user.id === post.user_id && (
            <div className="delete-post-icon">
              <DeletePostModal post={post} setShowModal={setShowModal} />
            </div>
          )}
        </div>
        <div className="post-description">
          <i className="fa-solid fa-circle-user"></i>
          <div className="post-description-username-display">
            <span className="username">
              <NavLink to={`/users/${post.user_id}`}>{post?.username}</NavLink>
            </span>
            <span className="description">{post?.description}</span>
          </div>
        </div>
        <GetAllComments post={post} />
        <div className="created-at-comments-likes-container">
          <div className="heart-container">
            {userLiked.length < 1 && (<AiOutlineHeart onClick={newLikeSubmit}/>)}
            {userLiked.length > 0 && (<span className="filled-heart">
              <AiFillHeart onClick={removeLikeSubmit}/>
              </span>)}
          </div>
          {slicedFilter.length > 0 && (
            <span className="liked-by">
              Liked by{" "}
              <NavLink to={`/users/${slicedFilter[0].user_id}`}>
                <span className="like-username">
                {" "}
                  {slicedFilter[0].username}
                </span>
              </NavLink>{" "}
              and{" "}
              <span className="like-others">
                {filteredLikes.length - 1} others
              </span>
            </span>
          )}
          <div className="created-at-post">{post.created_at.slice(5, 17)}</div>
          <div className="single-add-comment-container">
            <i className="fa-solid fa-face-laugh-beam"></i>
            <CreateNewComment post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};
