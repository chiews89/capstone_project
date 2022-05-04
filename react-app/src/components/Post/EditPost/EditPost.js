import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSinglePost } from "../../../store/posts";

export const EditPost = ({ onClose, post, setShowModal }) => {
  const dispatch = useDispatch();

  const [errorValidator, setErrorValidator] = useState([]);
  const [description, setDescription] = useState(post?.description || "");

  useEffect(() => {
    const errors = [];
    if (!description) errors.push("Please provide a description");
    if (description.length >= 100)
      errors.push("Description cannot be longer than 100 characters");
    setErrorValidator(errors);
  }, [description]);

  const handleEditPost = async (e) => {
    e.preventDefault();
    const payload = {
      ...post,
      description,
    };

    const updatedPost = await dispatch(editSinglePost(payload));
    if (updatedPost) {
      onClose(false);
      setShowModal(false)
    }
  };

  return (
    <div className="edit-post-container">
        <div className="add-description-label"> Edit Info </div>
      <ul>
        {errorValidator.map((error) => (
          <li className="edit-errors" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="edit-post" onSubmit={handleEditPost}>
        <div>
          <textarea
            id="form-label-description"
            placeholder="Description"
            maxLength='100'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="edit_post_description_input-bar"
          />
        </div>
        <div className="edit-post-submission">
          <button
            className="edit-post-button"
            type="submit"
            disabled={errorValidator.length > 0}
          >
            Done
          </button>
          <button className="cancel-add-button" type="true" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
