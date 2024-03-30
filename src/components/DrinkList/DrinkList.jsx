import { DrinkListTitle } from './DrinkListStyled';

export const DrinkLink = () => {
  return (
    <>
      <div>
        <DrinkListTitle>Today</DrinkListTitle>
        <ul>
          <li>
            <div>
              <div>svg</div>
              <h4>250ml</h4>
              <p>
                7:00<span>AM</span>
              </p>
            </div>
            <button>+</button>
            <button>-</button>
          </li>
        </ul>
        <button>Add water</button>
      </div>
    </>
  );
};
