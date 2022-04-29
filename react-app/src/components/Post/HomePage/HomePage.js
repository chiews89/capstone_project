import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { CreateNewComment } from "../../Comments/CreateComment/CreateComment";
import SinglePostModal from "../GetSinglePost";
import { ThreeComments } from "../../Comments/LimitedComments/LimitedComments";
import "./HomePage.css";

export const AllPosts = () => {
  const history = useHistory();
  const user = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const likes = Object.values(useSelector((state) => state.likes))
  console.log('likes', likes)

  const postsArr = Object.values(posts).reverse();

  window.scrollTo(0, 0);

  if (!user) {
    history.push(`/login`);
  }

  return (
    <main className="posts-main">
      {postsArr.map((post) => (
        <div className="all-posts-container">
          <div className="post-username">
            <div className="username-icon-home">
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className="home-page-username">
              <NavLink to={`/users/${post.user_id}`}>
                {post?.username}
              </NavLink>
            </div>
          </div>
          <div key={`single-post-link ${post?.id}`} to={`/posts/${post?.id}`}>
            <div className="post-images">
              <img
                height={650}
                width={650}
                alt={""}
                src={post?.image}
                onError={(e) =>
                  (e.target.src =
                    "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
                }
              />
            </div>
          </div>
          <div className="post-user-description">
            <div className="home-page-user-icon">
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className="post-d-user">
              <span className="username">
              <NavLink to={`/users/${post.user_id}`}>
                {post?.username}
              </NavLink>
                <span className="description">{post?.description}</span>
              </span>
            </div>
          </div>
          <div className="post-details">
            <SinglePostModal post={post} />
          </div>
          <div className="last-three-comments">
            <ThreeComments post={post} />
          </div>
          <div className="created-at">
            {post.created_at.slice(5, 17)}
          </div>
          <div className="add-comment-container">
            <i className="fa-solid fa-face-laugh-beam"></i>
            <CreateNewComment post={post} />
          </div>
        </div>
      ))}
    </main>
  );
};
