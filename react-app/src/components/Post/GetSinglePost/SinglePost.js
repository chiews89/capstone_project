import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { GetAllComments } from "../../Comments/GetComments/GetComments";
import { CreateNewComment } from "../../Comments/CreateComment/CreateComment";
import DeletePostModal from "../DeletePost";

export const SinglePost = ({ post, setShowModal }) => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const likes = Object.values(useSelector((state) => state.likes));

  const filteredLikes = likes.filter((like) => {
    return like.post_id === post.id;
  });

  const userLiked = filteredLikes.filter((like) => {
    return like.user_id === user.id;
  });

  console.log("user likes", filteredLikes);

  // {userLiked.length? heart onClick={dispatch remove like} : emptyheart onClick={dispatch add like}}

  if (!post) {
    return null;
  }

  if (!user) {
    history.push(`/login`);
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
          <span className="liked-by">
            Liked by{" "}
            <NavLink to={`/users/${userLiked.user_id}`}>
              {userLiked.username}
            </NavLink>
          </span>
          {filteredLikes.length}
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
