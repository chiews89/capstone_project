import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ThreeComments = ({ post }) => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comments);

  const commentsArr = Object.values(comments);

  const filteredArr = commentsArr
    .filter((comment) => {
      return comment.post_id === post.id;
    })
    .reverse();

  const slicedArr = filteredArr.slice(0, 3).reverse();

  if (!user) {
    history.push("/login");
  }
  return (
    <main className="comments-main-limit">
      {slicedArr.map((comment) => (
        <div key={comment?.id}>
          <div className="comments-container">
            <i className="fa-solid fa-circle-user"></i>
            <div className="comments-container-username-display">
              <span className="username">{comment.username}</span>
              <span className="comment">{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
