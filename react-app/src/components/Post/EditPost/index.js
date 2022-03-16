import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { EditPost } from "./EditPost";

const EditPostModal = ({postId}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-post-modal" onClick={() => setShowModal(true)}>
        Edit Post
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPost postId={postId} onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
};

export default EditPostModal;
