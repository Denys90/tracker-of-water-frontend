import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const popupRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (isOpenModal) {
          setIsOpenModal(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModal]
  );

  const handleBackdropClick = useCallback(
    (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (isOpenModal) {
          setIsOpenModal(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModal]
  );

  useEffect(() => {
    window.addEventListener('mousedown', handleBackdropClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleBackdropClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleBackdropClick, handleKeyDown, isOpenModal]);

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollDisabled]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    setIsScrollDisabled(!isScrollDisabled);
  };

  return (
    <ModalContext.Provider value={{ isOpenModal, popupRef, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be use within a ModalProvider');
  }
  return context;
};
