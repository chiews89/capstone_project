import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../../store/posts";

export const CreatePost = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user?.id);

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    const errors = [];
    if (!description) errors.push("Please provide a description");
    if (description.length >= 100)
      errors.push("Description cannot be longer than 100 characters");
    setErrorValidator(errors);
  }, [description]);

  const newPostSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", user);
    formData.append("image", image);
    formData.append("description", description);

    console.log('5555555', Object.fromEntries(formData.entries()))

    const newPost = await dispatch(createPost(formData));
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
        {image && (
          <img
            height={400}
            width={400}
            alt={image}
            src={image}
            onError={(e) =>
              (e.target.src =
                "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
            }
          />
        )}
        <div>
          <label className="add-image-label"> Image </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            name="image"
            onChange={updateImage}
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
