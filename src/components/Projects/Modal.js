import React from 'react';

export default function Modal({open, children, closeModal}) {
    if(!open) return null;
    return (
        <div>
            <button onClick={closeModal}>X</button>
            {children}
        </div>
    )
}
