import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Close, Overlay, ModalItem } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ close, children }) => {
  console.log('render modal');
  // const closeModal = useCallback(
  //   ({ target, currentTarget, code }) => {
  //     // console.log('render modal');
  //     if (target === currentTarget || code === 'Escape') {
  //       close();
  //     }
  //   },
  //   [close]
  // );
  const closeModalByEscape = ({ code }) => {
    if (code === 'Escape') {
      close();
    }
  };
  const closeModalByClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscape);
    return () => document.removeEventListener('keydown', closeModalByEscape);
  }, []);

  return createPortal(
    <Overlay onClick={closeModalByClick}>
      <ModalItem>
        <Close onClick={close}>X</Close>
        {children}
      </ModalItem>
    </Overlay>,
    modalRoot
  );
};
