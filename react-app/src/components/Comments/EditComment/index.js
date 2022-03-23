import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { EditComment } from "./EditComments";

const EditCommentModal = ({post, commentId}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-comment-modal" onClick={() => setShowModal(true)}>
      <i class="fa-solid fa-ellipsis"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditComment post={post} commentId={commentId} onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
};

export default EditCommentModal;
