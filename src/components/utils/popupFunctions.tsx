import React from 'react';
import ReactDOM from 'react-dom';
import PopupForm from '../ui/PopupForm';

/**
 * Opens a new window with the specified URL.
 * @param url - The URL to open in the new window.
 */
export const openPopup = (url: string) => {
    window.open(url, '_blank');
};

/**
 * Opens a popup form for adding a new evacuation center.
 */
export const openPopupForm = () => {
    const popupContainer = document.createElement('div');
    document.body.appendChild(popupContainer);

    const handleClose = () => {
        ReactDOM.unmountComponentAtNode(popupContainer);
        document.body.removeChild(popupContainer);
    };

    ReactDOM.render(<PopupForm onClose={handleClose} />, popupContainer);
};