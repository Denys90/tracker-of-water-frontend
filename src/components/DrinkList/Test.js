import { useState, useEffect } from 'react';
import {
  DrinkButtonMinus,
  DrinkButtonPlus,
  DrinkListWrapper,
  DrinkListTitle,
  DrinkListItem,
  DrinkGlass,
  DrinkButtons,
  DrinkListAddWater,
  DrinkListUl,
  DrinkListRow,
} from './DrinkListStyled';

import svg from 'assets/images/icons.svg';
import Modal from 'components/Modal/Modal';

import { getWatersThunk } from '../../store/water/thunk';
import { useDispatch, useSelector } from 'react-redux';

import { selectReps } from '../../store/water/selectors';

import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import { EditWaterModal } from 'components/EditWaterModal/EditWaterModal';
import { DeleteWaterModal } from 'components/DeleteWaterModal/DeleteWaterModal'; // Предположим, что у вас есть компонент DeleteWaterModal

export const DrinkList = () => {
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Состояние для хранения содержимого модального окна
  const dispatch = useDispatch();
  const reps = useSelector(selectReps);

  useEffect(() => {
    dispatch(getWatersThunk({ date: stringDate }));
  }, [dispatch, stringDate]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Функция для открытия модального окна с определенным содержимым
  const openModalWithContent = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <>
      <DrinkListWrapper>
        <DrinkListTitle>Today</DrinkListTitle>
        <DrinkListUl>
          {reps.map((drink) => (
            <DrinkListRow key={drink._id}>
              <DrinkListItem>
                <DrinkGlass>
                  <use href={`${svg}#icon-glass`}></use>
                </DrinkGlass>
                <h4>{drink.amount} ml</h4>
                <p>
                  {drink.time}
                  <span> AM</span>
                </p>
              </DrinkListItem>

              <DrinkButtons>
                {/* Обработчики событий для каждой кнопки, вызывающие функцию openModalWithContent с соответствующим содержимым */}
                <DrinkButtonPlus
                  onClick={() => openModalWithContent(<AddWaterModal />)}
                >
                  <use href={`${svg}#icon-note`}></use>
                </DrinkButtonPlus>
                <DrinkButtonMinus
                  onClick={() => openModalWithContent(<EditWaterModal />)}
                >
                  <use href={`${svg}#icon-pencil`}></use>
                </DrinkButtonMinus>
                <DrinkButtonMinus
                  onClick={() => openModalWithContent(<DeleteWaterModal />)}
                >
                  <use href={`${svg}#icon-trash`}></use>
                </DrinkButtonMinus>
              </DrinkButtons>
            </DrinkListRow>
          ))}
        </DrinkListUl>
        <DrinkListAddWater onClick={toggleModal}>
          <svg>
            <use href={`${svg}#icon-increment`}></use>
          </svg>
          Add water
        </DrinkListAddWater>
      </DrinkListWrapper>

      {/* Модальное окно, отображающее содержимое, установленное в modalContent */}
      {isOpen && <Modal onClose={toggleModal}>{modalContent}</Modal>}
    </>
  );
};
