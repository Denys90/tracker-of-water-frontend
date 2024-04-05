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

import svg from '../../assets/images/icons.svg';
import DrinkListModal from './DrinkListModal';
import BodyModal from '../Modal/BodyModal';

export const DrinkList = () => {
  const drinksData = [
    { id: 1, volume: 250, time: '7:00' },
    { id: 2, volume: 500, time: '10:00' },
  ];

  const { isOpenModalDrinkList, toggleModal, popupRef } = DrinkListModal();

  return (
    <>
      <DrinkListWrapper>
        <DrinkListTitle>Today</DrinkListTitle>
        <DrinkListUl>
          {drinksData.map((drink) => (
            <DrinkListRow key={drink.id}>
              <DrinkListItem>
                <DrinkGlass>
                  <use href={`${svg}#icon-glass`}></use>
                </DrinkGlass>
                <h4>{drink.volume} ml</h4>
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
        <DrinkListAddWater onClick={toggleModal} ref={popupRef}>
          <svg>
            <use href={`${svg}#icon-increment`}></use>
          </svg>
          Add water
        </DrinkListAddWater>
      </DrinkListWrapper>
      {isOpenModalDrinkList && (
        <BodyModal>
          <div>Add water of todo(children)</div>
        </BodyModal>
      )}
    </>
  );
};
