import { useEffect, useCallback, useRef, useState } from 'react';

const useModalNorma = () => {
  const [isOpenModalNorma, setIsOpenModalNorma] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const popupRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (isOpenModalNorma) {
          setIsOpenModalNorma(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalNorma]
  );

  const handleBackdropClick = useCallback(
    (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (isOpenModalNorma) {
          setIsOpenModalNorma(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalNorma]
  );

  useEffect(() => {
    window.addEventListener('mousedown', handleBackdropClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleBackdropClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleBackdropClick, handleKeyDown]);

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollDisabled]);

  const toggleModal = () => {
    setIsOpenModalNorma(!isOpenModalNorma);
    setIsScrollDisabled(!isScrollDisabled);
  };

  return { isOpenModalNorma, popupRef, toggleModal };
};

export default useModalNorma;
