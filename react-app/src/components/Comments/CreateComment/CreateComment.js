import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createNewComment } from "../../../store/comments";
import "./CreateComment.css";

export const CreateNewComment = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user?.id);

  const [comment, setComment] = useState("");

  const newCommentSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: user,
      post_id: post.id,
      comment,
    };
    const newComment = await dispatch(createNewComment(payload));
    if (newComment) {
      setComment("");
    }
  };

  return (
    <form className="new-comment-container" onSubmit={newCommentSubmit}>
      <label className="comment-label">
        <input
          placeholder="Add a comment..."
          className="comment-input"
          maxLength='100'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <div className="button-div">
      <button
        className="create-comment-button"
        type="submit"
        disabled={comment.length < 1 || comment.length >= 100}
      >
        Post
      </button>
      </div>
    </form>
  );
};
