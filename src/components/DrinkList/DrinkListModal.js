import { useEffect, useCallback, useRef, useState } from 'react';

const DrinkListModal = () => {
  const [isOpenModalDrinkList, setIsOpenModalDrinkList] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const popupRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (isOpenModalDrinkList) {
          setIsOpenModalDrinkList(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalDrinkList]
  );

  const handleBackdropClick = useCallback(
    (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (isOpenModalDrinkList) {
          setIsOpenModalDrinkList(false);
          setIsScrollDisabled(false);
        }
      }
    },
    [isOpenModalDrinkList]
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
    setIsOpenModalDrinkList(!isOpenModalDrinkList);
    setIsScrollDisabled(!isScrollDisabled);
  };

  return { isOpenModalDrinkList, popupRef, toggleModal };
};

export default DrinkListModal;
// =========================================
