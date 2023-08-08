import { Overlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export const Modal = ({ closeImgModal, children }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        closeImgModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeImgModal]);

  return (
    <Overlay
      onClick={e => (e.target === e.currentTarget ? closeImgModal() : null)}
    >
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  closeImgModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.element),
};
