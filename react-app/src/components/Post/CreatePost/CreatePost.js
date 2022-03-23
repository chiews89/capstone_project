import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../../store/posts";

export const CreatePost = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);


  useEffect(() => {
    const errors = [];
    if (!image_url.length) errors.push("Image file must be a jpeg jpg gif or png");
    if (image_url.length > 0 && !image_url.match(/\.(jpeg|jpg|gif|png)$/))
      errors.push("Image file must be a jpeg jpg gif or png");
    if (!description) errors.push("Please provide a description");
    if (description.length > 100)
      errors.push("Post cannot be longer than 100 characters");
    setErrorValidator(errors);
  }, [image_url, description]);

  const newPostSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: user.id,
      image_url,
      description,
    };
    const newPost = await dispatch(createPost(payload));
    if (newPost) {
      onClose(false);
    }
  };

  return (
    <form className="new-post-container" onSubmit={newPostSubmit}>
      <h2>Create a post</h2>
      <ul>
        {errorValidator.map((error) => (
          <li className="create-errors" key={error}>
            {error}
          </li>
        ))}
      </ul>
      <div className="new-post-form">
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
            className="create-post-image"
          />
        </div>
        <div>
          <label className="add-description-label"> Description </label>
          <textarea
            id="form-label-description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="create-post-description"
          />
        </div>
      </div>
      <div className="create-post">
        <button
          className="create-post-button"
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
  );
};
