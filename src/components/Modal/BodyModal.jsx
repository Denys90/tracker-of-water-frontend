import { createPortal } from 'react-dom';
import { Popup, ModalContent, CloseButton, ModalWrapper } from './Modal.styled';

import useModal from 'hooks/useModal';
import useUsers from 'hooks/useUsers';

const modalRoot = document.querySelector('#modalRoot');

const BodyModal = ({ children }) => {
  const { isAuthenticated } = useUsers();
  const { popupRef, toggleModal } = useModal();
  return isAuthenticated
    ? null
    : modalRoot &&
        createPortal(
          <Popup>
            <ModalWrapper ref={popupRef}>
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
