import { useEffect, useCallback, useRef, useState } from 'react';

const useModalProgressBar = () => {
  const [isOpenModalBar, setIsOpenModalBar] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const popupRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (isOpenModalBar) {
          setIsOpenModalBar(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalBar]
  );

  const handleBackdropClick = useCallback(
    (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (isOpenModalBar) {
          setIsOpenModalBar(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalBar]
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
    setIsOpenModalBar(!isOpenModalBar);
    setIsScrollDisabled(!isScrollDisabled);
  };

  return { isOpenModalBar, popupRef, toggleModal };
};

export default useModalProgressBar;
