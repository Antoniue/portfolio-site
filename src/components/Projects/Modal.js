import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({open, children, closeModal}) {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
        <div className="overlay" />
        <div className='modal'>
            <div className="buttonContainer">
                <button onClick={closeModal}>X</button>
            </div>
            {children}
        </div>
        </>,
            document.getElementById('expandPortal')
    )
}
