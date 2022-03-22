import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { CreatePost } from "./CreatePost";

const CreatePostModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-post-modal" onClick={() => setShowModal(true)}>
      <i class="fa-solid fa-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreatePost onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
};

export default CreatePostModal;
