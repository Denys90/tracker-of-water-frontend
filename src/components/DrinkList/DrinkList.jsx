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


export const DrinkList = () => {
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
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
              <DrinkButtonMinus onClick={() => handleDeleteDrink(drink.id)}>
                  <use href={`${svg}#icon-trash`}></use>
                </DrinkButtonMinus>
            </DrinkButtons>
          </DrinkListRow>
        </DrinkListUl>
        <button>Add water</button>
      </DrinkListWrapper>
    </>
  );
};
