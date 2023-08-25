import React from 'react';
import './InfoTooltip.css';
import ok from '../../images/ok.png';
import not from '../../images/not.png';

function InfoTooltip({ isOpen, onClose, infoPopup }) {
  const className = `popup popup__infoTooltip ${isOpen ? 'popup_opened' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container">
        <button className="popup__button-close popup__button-close_delete" type="button" onClick={onClose}></button>
        <div className="popup__info">
          <img className="popup__info-tooltip-image" src={infoPopup.isError ? not : ok} alt="символ"/>
          <p className="popup__info-tooltip-text">{infoPopup.message}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
