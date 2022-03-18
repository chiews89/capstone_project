
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { deleteAComment, getAllComments } from "../../../store/comments";

export const GetAllComments = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comments);

  const commentsArr = Object.values(comments);

  const filteredArr = commentsArr.filter((comment) => {
    return comment.post_id === post.id;
  });

  const handleCommentDeletion = async (e, commentId) => {
    e.preventDefault();
    dispatch(deleteAComment(commentId));
  };

  if (!user) {
    history.push("/login");
  }

  return (
    <main className="comments-main">
      <h2>Comments</h2>
      {filteredArr.map((comment) => (
        <div key={comment?.id}>
          <div className="comments-container">
            {comment.username} {comment.comment}
            {user.id === comment.user_id && (
              <button
                className="delete-review-button"
                onClick={(e) => handleCommentDeletion(e, comment?.id)}
              >
                Delete Your Comment
              </button>
            )}
          </div>
        </div>
      ))}
    </main>
  );
};
