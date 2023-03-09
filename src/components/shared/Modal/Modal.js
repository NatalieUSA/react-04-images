import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { Close, Overlay, ModalItem } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ close, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      console.log('render modal');
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalItem>
        <Close onClick={close}>X</Close>
        {children}
      </ModalItem>
    </Overlay>,
    modalRoot
  );
};
