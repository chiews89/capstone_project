import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { SinglePost } from './SinglePost';

const SinglePostModal = ({post}) => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
        <button className='nav-login' onClick={() => setShowModal(true)}>view all comments</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <SinglePost post={post} setShowModal={setShowModal} />
            </Modal>
        )}
        </>
    );
};

export default SinglePostModal;
