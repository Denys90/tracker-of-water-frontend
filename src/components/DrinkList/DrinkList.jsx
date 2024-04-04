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
// import BodyModal from '../Modal/BodyModal';
import { AddWaterModal } from '../AddWaterModal/AddWaterModal';

export const DrinkList = () => {
  const { isOpenModalDrinkList, toggleModal, popupRef } = DrinkListModal();
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
        <DrinkListAddWater onClick={toggleModal} ref={popupRef}>
          <svg>
            <use href={`${svg}#icon-increment`}></use>
          </svg>
          Add water
        </DrinkListAddWater>
      </DrinkListWrapper>
      {isOpenModalDrinkList && (
       
        <AddWaterModal/>
    
      )}
    </>
  );
};
