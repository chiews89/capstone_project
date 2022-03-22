import React from 'react';

import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='created-by'>
                    <p>Created By</p>
                    <ul>
                        <li>
                            <a href='https://github.com/chiews89' target='_blank' rel='noopener noreferrer' className='footer-links'>Chiew Saetern</a>
                        </li>
                    </ul>
                </div>
                <div className='created-with'>
                    <p>Created With</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Flask</li>
                        <li>SQLAlchemy</li>
                        <li>Alembic</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-copyright'>© 2022 InstaGame</div>
            </div>
        </div>
    );
};
