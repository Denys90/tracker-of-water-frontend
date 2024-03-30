import { ContainerStyles } from '../../Container/ContainerStyles.styled';
import { ConsumptionTracker } from '../ConsumptionTracker/ConsumptionTracker';
import { DrinkWater } from '../DrinkWater/DrinkWater';
import { MainPageStyle } from './MainPage.styled';

export const MainPage = () => {
  return (
    <ContainerStyles>
      <MainPageStyle>
        <ConsumptionTracker />
        <DrinkWater />
      </MainPageStyle>
    </ContainerStyles>
  );
};
