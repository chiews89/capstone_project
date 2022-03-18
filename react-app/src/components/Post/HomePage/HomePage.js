import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CreateNewComment } from "../../Comments/CreateComment/CreateComment";
import SinglePostModal from "../GetSinglePost";
import { ThreeComments } from "../../Comments/LimitedComments/LimitedComments";

export const AllPosts = () => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const posts = useSelector((state) => state.posts);

  const postsArr = Object.values(posts).reverse();

  if (!user) {
    history.push(`/login`);
  }

  return (
    <main className="posts-main">
      <h1>Posts</h1>
      {postsArr.map((post) => (
        <div className="all-posts-container">
          <div className="post-username">{post?.username}</div>
          <div key={`single-post-link ${post?.id}`} to={`/posts/${post?.id}`}>
            <div className="post-images">
              <img
                height={400}
                width={400}
                alt={post?.image_url}
                src={post?.image_url}
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
                }
              />
            </div>
          </div>
          <div className="post-description">{post?.description}</div>
          <ThreeComments post={post} />
          <SinglePostModal post={post} />
          <CreateNewComment post={post} />
          {user.id === post.user_id && (
            <div className="edit-delete-buttons"></div>
          )}
        </div>
      ))}
    </main>
  );
};
