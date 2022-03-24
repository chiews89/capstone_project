import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editSinglePost } from "../../../store/posts";

export const EditPost = ({ onClose, post, setShowModal }) => {
  const dispatch = useDispatch();

  const [errorValidator, setErrorValidator] = useState([]);

  const [image_url, setImageUrl] = useState(post?.image_url || "");
  const [description, setDescription] = useState(post?.description || "");

  useEffect(() => {
    const errors = [];
    if (!image_url.length) errors.push("Image file must end in a jpeg/jpg/gif/png format");
    if (image_url.length > 0 && !image_url.match(/\.(jpeg|jpg|gif|png)$/))
      errors.push("Image file must end in a jpeg/jpg/gif/png format");
    if (!description) errors.push("Please provide a description");
    if (description.length > 100)
      errors.push("Description cannot be longer than 100 characters");
    setErrorValidator(errors);
  }, [image_url, description]);

  const handleEditPost = async (e) => {
    e.preventDefault();
    const payload = {
      ...post,
      image_url,
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
      <ul>
        {errorValidator.map((error) => (
          <li className="edit-errors" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <form className="edit-post" onSubmit={handleEditPost}>
        {image_url && (
          <img
            height={250}
            width={250}
            alt={image_url}
            src={image_url}
            onError={(e) =>
              (e.target.src =
                "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
            }
          />
        )}
        <div>
          <label className="add-image-label"> Image </label>
          <input
            id="form-label-image"
            placeholder="Image"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            className="edit-image_url-bar"
          />
        </div>
        <div>
          <label className="add-description-label"> Description </label>
          <textarea
            id="form-label-description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="edit_post_description_input-bar"
          />
        </div>
        <div className="edit-post">
          <button
            className="edit-post-button"
            type="submit"
            disabled={errorValidator.length > 0}
          >
            Submit
          </button>
          <button className="cancel-add-button" type="true" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
