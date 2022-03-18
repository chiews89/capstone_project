import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { SinglePost } from './SinglePost';

const SinglePostModal = ({post}) => {
    const [ showModal, setShowModal ] = useState(false);
    const location = useLocation()

    return (
        <>
        {location.pathname === '/' && <div>

        <button className='nav-login' onClick={() => setShowModal(true)}>view all comments</button>
        </div>}
        {location.pathname === '/profile' && <div>
        <button className='nav-login' onClick={() => setShowModal(true)}>...</button>
        </div>}
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <SinglePost post={post} setShowModal={setShowModal} />
            </Modal>
        )}
        </>
    );
};

export default SinglePostModal;
