import { useState } from 'react';
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

export const DrinkList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DrinkListWrapper>
        <DrinkListTitle>Today</DrinkListTitle>
        <DrinkListUl>
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <DrinkListRow>
            <DrinkListItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
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
          <h2>Drink list</h2>
        </Modal>
      )}
    </>
  );
};
