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

    if (!comment) errors.push("Please delete comment instead");
    if (comment.length >= 100)
      errors.push("Comment cannot be longer than 100 characters");
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
      <label className="add-comment-label">Comment</label>
      {/* <ul>
        {errorValidator.map((error) => (
          <li className="comments-errors" key={error}>
            {error}
          </li>
        ))}
      </ul> */}
      <form className="edit-comment" onSubmit={handleEditComment}>
        <textarea
          id="comment-label"
          placeholder="Comment"
          maxLength='100'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="edit-comment-button"
          type="submit"
          disabled={comment.length < 1 || comment.length >= 100}
        >
          Edit
        </button>
        <button
          className="delete-comment-button"
          onClick={(e) => handleCommentDeletion(e, commentId?.id)}
        >
          Delete
        </button>
        <button className="cancel-edit-button" type="true" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};
