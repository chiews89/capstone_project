import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editAComment } from "../../../store/comments";

export const EditComment = ({ post, commentId, onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const postId = useSelector((state) => state.posts)
  const comments = useSelector((state) => state.comments[commentId]);

  const [comment, setComment] = useState(comments?.comment || "");
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];

    if (!comment) errors.push("Please delete instead");
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
    console.log('22222222222', payload)
    const updatedComment = await dispatch(editAComment(payload));
    if (updatedComment) {
        onClose(false)
    }
  };

  return (
    <div className="edit-comment">
      <ul>
        {errorValidator.map((error) => (
          <li className="error-list" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="edit-comment" onSubmit={handleEditComment}>
        <label className="comment-label">
          <input
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button
          className="create-post-button"
          type="submit"
          //   disabled={errorValidator.length > 0}
        >
          Submit
        </button>
        {/* <button className="cancel-add-button" type="true" onClick={onClose}>
          Cancel
        </button> */}
      </form>
    </div>
  );
};
