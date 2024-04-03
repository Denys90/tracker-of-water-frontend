import {
  DrinkButtonMinus,
  DrinkButtonPlus,
  DrinkListWrapper,
  DrinkListTitle,
  DrinkListItem,
  DrinkGlass,
  DrinkButtons,
  DrinkListUl,
  DrinkListRow,
} from './DrinkListStyled';
import svg from '../../assets/images/icons.svg';
import { useState } from 'react';
import DrinkListModal from './DrinkListModal';
import BodyModal from '../Modal/BodyModal';

export const DrinkList = () => {
  const { isOpenModalDrinkList, toggleModal, popupRef } = DrinkListModal();

  const [drinkList, setDrinkList] = useState([
    { id: 1, amount: '250ml', time: '7:00AM' },
    { id: 2, amount: '250ml', time: '8:00AM' },
    { id: 3, amount: '250ml', time: '9:00AM' },
  ]);

  const handleDeleteDrink = (id) => {
    setDrinkList(drinkList.filter((drink) => drink.id !== id));
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drinkList.id)}>
                <use href={`${svg}#icon-trash`}></use>
              </DrinkButtonMinus>
            </DrinkButtons>
          </DrinkListRow>
        </DrinkListUl>
        {isOpenModalDrinkList && (
          <BodyModal>
            <div>Add water of todo</div>
          </BodyModal>
        )}
        <button onClick={toggleModal} ref={popupRef}>
          Add water of todo
        </button>
      </DrinkListWrapper>
    </>
  );
};
