import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createNewComment } from "../../../store/comments";
import "./CreateComment.css";

export const CreateNewComment = ({ post }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user?.id);
  const [errorValidator, setErrorValidator] = useState([]);

  const [comment, setComment] = useState("");

  useEffect(() => {
    const errors = [];
    if (comment.length > 100)
      errors.push("Comments cannot be longer than 100 characters");
    setErrorValidator(errors);
  }, [comment]);

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
    <div className="create-comment-container">
      <ul>
        {errorValidator.map((error) => (
          <li className="create-errors" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="new-comment-container" onSubmit={newCommentSubmit}>
        <label className="comment-label">
          <input
            placeholder="Add a comment..."
            className="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button
          className="create-comment-button"
          type="submit"
          disabled={comment.length < 1 || comment.length >= 100}
        >
          Post
        </button>
      </form>
    </div>
  );
};
