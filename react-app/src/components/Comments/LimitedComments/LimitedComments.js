import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

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
            <div className="comments-container-username-display">
              <span className="username">
                <NavLink to={`/users/${comment.user_id}`}>
                  {comment?.username}
                </NavLink>
              </span>
              <span className="comment">{comment.comment}</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
