import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editAComment } from "../../../store/comments";
import { deleteAComment } from "../../../store/comments";

export const EditComment = ({ post, commentId, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [comment, setComment] = useState(commentId?.comment || "");
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!comment) errors.push("Please delete comment");
    setErrorValidator(errors);
  }, [comment]);

  const handleEditComment = async (e) => {
    e.preventDefault();
    const payload = {
      id: commentId.id,
      user_id: user.id,
      post_id: post.id,
      comment,
    };

    const updatedComment = await dispatch(editAComment(payload));
    if (updatedComment) {
      onClose(false);
    }
  };

  const handleCommentDeletion = async (e, commentId) => {
    e.preventDefault();
    dispatch(deleteAComment(commentId));
  };

  return (
    <div className="edit-comment-container">
      <ul>
        {errorValidator.map((error) => (
          <li className="error-list" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="edit-comment" onSubmit={handleEditComment}>
        <label>
          <input
            className="comment-label"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button
          className="edit-comment-button"
          type="submit"
          disabled={comment.length < 1 || comment.length >= 100}
        >
          Edit
        </button>
        <button className="cancel-edit-button" type="true" onClick={onClose}>
          Cancel
        </button>

        <button
          className="delete-comment-button"
          onClick={(e) => handleCommentDeletion(e, commentId?.id)}
        >
          Delete
        </button>
      </form>
    </div>
  );
};
