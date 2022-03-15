import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../../store/posts";

export const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state.posts[id]);

  console.log("post", post);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  if (!post) {
    return null;
  }

  return (
    <div className="post-detail-container">
      <img
        width={350}
        height={350}
        alt={post?.id}
        src={
          post?.image_url
            ? post?.image_url
            : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
        }
      />
      <div className="post-description">
          {post?.description}
      </div>
    </div>
  );
};
