import { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../store/modal/modalSlice';
import { selectIsOpenModal } from '../store/modal/selectors';

const useModal = () => {
  const isOpenModal = useSelector(selectIsOpenModal);
  const dispatch = useDispatch();
  const popupRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (isOpenModal) {
          dispatch(closeModal());
        }
      }
    },
    [dispatch, isOpenModal]
  );

  const handleBackdropClick = useCallback(
    (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (isOpenModal) {
          dispatch(closeModal());
        }
      }
    },
    [dispatch, isOpenModal]
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
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenModal]);

  const toggleModal = () => {
    if (isOpenModal) {
      dispatch(closeModal());
    } else {
      dispatch(openModal());
    }
  };

  return { isOpenModal, popupRef, toggleModal };
};

export default useModal;
