import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSinglePost } from "../../../store/posts";

export const EditPost = ({ onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const post = useSelector((state) => state.posts[id]);

  const [image_url, setImageUrl] = useState(post?.image_url || "");
  const [description, setDescription] = useState(post?.description || "");

  useEffect(() => {
    if (post) {
      setImageUrl(post.image_url);
      setDescription(post.description);
    }
  }, [post]);

  const handleEditPost = async (e) => {
    e.preventDefault();
    const payload = {
      ...post,
      image_url,
      description,
    };
    const updatedPost = await dispatch(editSinglePost(payload));
    if (updatedPost) {
      history.push(`/posts/${post.id}`);
      onClose(false);
    }
  };

  return (
    <div className="edit-post-container">
      <form className="edit-post" onSubmit={handleEditPost}>
        {image_url && <img
          height={250}
          width={250}
          alt={image_url}
          src={
            image_url
          }
        />}
        <div>
          <label> Image </label>
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
        <div className="edit-post">
          <button
            className="edit-post-button"
            type="submit"
            // disabled={errorValidator.length > 0}
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
