import { ContainerStyles } from '../../Container/ContainerStyles.styled';
import { ConsumptionTracker } from '../ConsumptionTracker/ConsumptionTracker';
import { DrinkWater } from '../DrinkWater/DrinkWater';
import { BackgroundElement, MainPageStyle, Wrap } from './MainPage.styled';

export const MainPage = () => {
  return (
    <MainPageStyle>
      <BackgroundElement>
        <ContainerStyles>
          <Wrap>
            <ConsumptionTracker />
            <DrinkWater />
          </Wrap>
        </ContainerStyles>
      </BackgroundElement>
    </MainPageStyle>
  );
};
