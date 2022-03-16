import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../../../store/posts";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  const newPostSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: user.id,
      image_url,
      description,
    };
    const newPost = await dispatch(createPost(payload));
    if (newPost) {
      history.push(`/posts/${newPost.id}`);
    }
  };

  return (
    <form className="new-post-container" onSubmit={newPostSubmit}>
      <h2>Create A Post</h2>
      <ul>Errors</ul>
      <div className="new-post-form">
        <div>
          <label> Name </label>
          <input
            id="form-label-image"
            placeholder="Image"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            className="edit-image_url-bar"
          />
        </div>
        <div>
        <label> Description </label>
        <textarea
          id="form-label-description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="edit_post_description_input-bar"
        />
      </div>
      </div>
      <div className="add-product">
        <button
          className="add-product-button"
          type="submit"
          disabled={errorValidator.length > 0}
        >
          Submit
        </button>
        {/* <button className="cancel-add-button" type="true" onClick={onClose}>
          Cancel
        </button> */}
      </div>
    </form>
  );
};
