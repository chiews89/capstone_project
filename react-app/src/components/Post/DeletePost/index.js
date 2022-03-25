import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { DeletePost } from "./DeletePost";

const DeletePostModal = ({ post, setShowModal }) => {
  const [showModal, openModal] = useState(false);

  return (
    <>
      <button className="delete-post-modal" onClick={() => openModal(true)}>
        <i className='ellipsis' class="fa-solid fa-ellipsis"></i>
      </button>
      {showModal && (
        <Modal onClose={() => openModal(false)}>
          <DeletePost
            
            post={post}
            setShowModal={setShowModal}
            onClose={() => openModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default DeletePostModal;
