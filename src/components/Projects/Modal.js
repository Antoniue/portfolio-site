import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({open, children, closeModal}) {
    if(!open) return null;
    return ReactDom.createPortal(
        <>
        <div className="overlay" />
        <div className='modal'>
            <button onClick={closeModal}>X</button>
            {children}
        </div>
        </>,
            document.getElementById('expandPortal')
    )
}
