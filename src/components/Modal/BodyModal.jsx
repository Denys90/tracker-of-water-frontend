import { createPortal } from 'react-dom';
import { Popup, ModalContent, CloseButton, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');

const BodyModal = ({ isOpen, toggleModal, children }) => {
  return isOpen
    ? null
    : modalRoot &&
        createPortal(
          <Popup>
            <ModalWrapper>
              <ModalContent>
                {children}
                <CloseButton onClick={toggleModal}>Х</CloseButton>
              </ModalContent>
            </ModalWrapper>
          </Popup>,
          modalRoot
        );
};

export default BodyModal;
