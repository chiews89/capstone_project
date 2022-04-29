import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../../store/posts";
import './CreatePost.css'

export const CreatePost = ({ onClose, post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user?.id);

  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState('')
  const [description, setDescription] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file))
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


    const newPost = await dispatch(createPost(formData));
    if (newPost) {
      onClose(false);
    }
  };

  return (
    <form className="new-post-container" onSubmit={newPostSubmit}>
      <p className="create-new-post-title">Create new post</p>
      <div className="new-post-form">
      <img className="image-preview" src={imagePreview} alt =''>
      </img>
        <div>
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
          Post
        </button>
        <button className="cancel-add-button" type="true" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
