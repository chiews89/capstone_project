import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getAllComments } from "../../../store/comments";

export const GetAllComments = ({post}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comments);
  const posts = useSelector((state) => state.posts);

  const commentsArr = Object.values(comments);

  const filteredArr = commentsArr.filter((comment) => {
    return comment.post_id === post.id
  })

  console.log('222222', filteredArr)

  console.log('1111111111', post)

  const postsArr = Object.values(posts)
  console.log("posts", postsArr);

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

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
            </div>
        </div>
      ))}
    </main>
  );
};
