import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { SinglePost } from "../GetSinglePost/SinglePost";

const SingleProfilePostModal = ({ post }) => {
  console.log("post", post);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="view-profile-post" onClick={() => setShowModal(true)}>
        <img
        className="profile-post-image"
          height={400}
          width={400}
          alt={post?.image_url}
          src={post?.image_url}
          onError={(e) =>
            (e.target.src =
              "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=")
          }
        />
      </button>
      <span className="profile-page-description">{post?.description}</span>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SinglePost post={post} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default SingleProfilePostModal;
