import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSinglePost } from "../../../store/posts";
import EditPostModal from "../EditPost";
import { deleteSinglePost } from "../../../store/posts";

export const SinglePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);

  const post = useSelector((state) => state.posts[id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  if (!post) {
    return null;
  }

  if (!user) {
    history.push(`/login`);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteSinglePost(id));
    history.push(`/`);
  };

  return (
    <div className="post-detail-container">
      <p>{post.username}</p>
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
      <div className="post-description">{post?.description}</div>
      <EditPostModal postId={post?.id} />
      <button className="delete-button" onClick={handleDelete}>
        Delete Your Post
      </button>
    </div>
  );
};
