import {
  ModalContent,
  ModalWrapper,
  Popup,
  CloseButton,
} from 'components/Modal/Modal.styled';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import svg from 'assets/images/icons.svg';

// ({ onClose, children, fullVP = false })
const Modal = ({ onClose, children }) => {
  const targetElement = document.getElementById('modal-root');
  const backdrop = useRef();

  const handleClickOutside = (event) => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = '';
    document.body.style.position = '';
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      document.body.style.overflow = '';
      document.body.style.position = '';
      onClose();
    }
  };

  useEffect(() => {
    const eventHandler = (e) => handleKeyDown(e);
    document.addEventListener('keydown', eventHandler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', eventHandler);
    };
  }, []);

  return ReactDOM.createPortal(
    <Popup onClick={handleClickOutside} ref={backdrop}>
      <ModalWrapper>
        <ModalContent>
          <CloseButton onClick={onClose}>
            <svg>
              <use href={`${svg}#closeModal`}></use>
            </svg>
          </CloseButton>
          {children}
        </ModalContent>
      </ModalWrapper>
    </Popup>,
    targetElement
  );
};

export default Modal;
{
  /* <div
  className={fullVP ? styles.menu : styles.modal}
  onClick={handleClickOutside}
  ref={backdrop}
>
  <div className={styles.cover}>
    <div className={styles.content}>
      <button className={styles.close} onClick={onClose}>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-cross`}></use>
        </svg>
      </button>
      {children}
    </div>
  </div>
</div>, */
}
