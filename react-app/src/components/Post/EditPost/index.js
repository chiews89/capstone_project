import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { EditPost } from "./EditPost";

const EditPostModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-post-modal" onClick={() => setShowModal(true)}>
        Edit Post
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditPost onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
};

export default EditPostModal;
