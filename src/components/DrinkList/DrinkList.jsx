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

export const DrinkList = () => {
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const reps = useSelector(selectReps);

  useEffect(() => {
    dispatch(getWatersThunk({ date: stringDate }));
  }, [dispatch, stringDate]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
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
                <DrinkButtonPlus>
                  <use href={`${svg}#icon-note`}></use>
                </DrinkButtonPlus>
                <DrinkButtonMinus>
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

      {isOpen && (
        <Modal onClose={toggleModal}>
          <AddWaterModal/>
        </Modal>
      )}
    </>
  );
};
