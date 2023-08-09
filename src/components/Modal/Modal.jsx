import { Overlay, ModalContainer } from './Modal.styled';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from 'store/ContextProvider';

export const Modal = ({ children }) => {
  const { setBigImgUrl } = useContext(GlobalContext);
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        setBigImgUrl('');
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setBigImgUrl]);

  return (
    <Overlay
      onClick={e => (e.target === e.currentTarget ? setBigImgUrl('') : null)}
    >
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};
