import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { CreatePost } from "./CreatePost";

const CreatePostModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="create-post-modal" onClick={() => setShowModal(true)}>
        Create Post
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
