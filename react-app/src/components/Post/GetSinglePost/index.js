import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { SinglePost } from "./SinglePost";

const SinglePostModal = ({ post }) => {
  const comments = useSelector((state) => state.comments);

  const commentsArr = Object.values(comments);

  const postComments = commentsArr.filter(
    (comments) => comments.post_id === post.id
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-login" onClick={() => setShowModal(true)}>
        {" "}
        <div className="number-comments">View all {postComments?.length} comments</div>
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SinglePost post={post} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default SinglePostModal;
