import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ThreeComments = ({ post }) => {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comments);

  const commentsArr = Object.values(comments);

  const postComments = commentsArr.filter(
    (comments) => comments.post_id === post.id
  );

  const filteredArr = commentsArr
    .filter((comment) => {
      return comment.post_id === post.id;
    })
    .reverse();

  const slicedArr = filteredArr.slice(0, 3);

  if (!user) {
    history.push("/login");
  }
  return (
    <main className="comments-main">
      <h2 className="number-comments">{postComments?.length} Comments </h2>
      {slicedArr.map((comment) => (
        <div key={comment?.id}>
          <div className="comments-container">
            <i className="fa-solid fa-circle-user"></i> {comment.username}{" "}
            {comment.comment}
          </div>
        </div>
      ))}
    </main>
  );
};
