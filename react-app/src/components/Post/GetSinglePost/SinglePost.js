import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GetAllComments } from "../../Comments/GetComments/GetComments";
import { CreateNewComment } from "../../Comments/CreateComment/CreateComment";
import DeletePostModal from "../DeletePost";

export const SinglePost = ({ post, setShowModal }) => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  if (!post) {
    return null;
  }

  if (!user) {
    history.push(`/login`);
  }

  return (
    <div className="post-detail-container">
      <div className="single-post-username">
        <div className="single-post-user">
          <i className="fa-solid fa-circle-user"></i>
          <div className="single-post-username-display">{post?.username}</div>
        </div>
        {user.id === post.user_id && (
          <div className="delete-post-icon">
            <DeletePostModal post={post} setShowModal={setShowModal} />
          </div>
        )}
      </div>
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
      <div className="post-description">
        <i className="fa-solid fa-circle-user"></i>
        <div className="post-description-username-display">
          {post?.username}{" "}
        </div>
        <div className="post-description-text">{post?.description}</div>
      </div>
      <GetAllComments post={post} />
      <div className="single-add-comment-container">
        <i className="fa-solid fa-face-laugh-beam"></i>{" "}
        <CreateNewComment post={post} />
      </div>
    </div>
  );
};
