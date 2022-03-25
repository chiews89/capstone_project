import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { EditPost } from "./EditPost";

const EditPostModal = ({ post, setShowModal }) => {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <button className="edit-post-modal" onClick={() => setModal(true)}>
        Edit Post
      </button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <EditPost post={post} setModal={setModal} setShowModal={setShowModal} onClose={() => setModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default EditPostModal;
