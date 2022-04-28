import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import EditCommentModal from "../EditComment";

export const GetAllComments = ({ post }) => {
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comments);

  const commentsArr = Object.values(comments);

  const filteredArr = commentsArr.filter((comment) => {
    return comment.post_id === post.id;
  });

  if (!user) {
    history.push("/login");
  }

  return (
    <main className="comments-main">
      {filteredArr.map((comment) => (
        <div key={comment?.id}>
          <div className="single-post-comments-container">
            <i className="fa-solid fa-circle-user"></i>{" "}
            <div className="single-post-comment-username-display">
              <span className="username">
                <NavLink to={`/users/${comment.user_id}`}>
                  {comment?.username}
                </NavLink>
              </span>
              <span className="comment">{comment.comment}</span>
            </div>
            {user.id === comment.user_id && (
              <EditCommentModal post={post} commentId={comment} />
            )}
          </div>
            <div className="created-at">
          {comment.created_at.slice(5, 17)}
          </div>
        </div>
      ))}
    </main>
  );
};
