import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
            <i className="fa-solid fa-circle-user"></i> {' '}
            {comment.username} {comment.comment}
            {user.id === comment.user_id && (
              <EditCommentModal post={post} commentId={comment} />
            )}
          </div>
        </div>
      ))}
    </main>
  );
};
