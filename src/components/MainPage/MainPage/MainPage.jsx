import { ConsumptionTracker } from '../ConsumptionTracker/ConsumptionTracker';
import { DrinkWater } from '../DrinkWater/DrinkWater';
import { MainPageStyle } from './MainPage.styled';

export const MainPage = () => {
  return (
    <div>
      <MainPageStyle>
        <ConsumptionTracker />
        <DrinkWater />
      </MainPageStyle>
    </div>
  );
};
