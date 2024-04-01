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
import { AddWater } from '../../styles/btnStyles';

export const DrinkList = () => {
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
        <AddWater>Add water</AddWater>
      </DrinkListWrapper>
    </>
  );
};
