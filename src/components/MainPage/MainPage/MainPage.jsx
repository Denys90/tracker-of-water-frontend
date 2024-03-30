import { Container } from '@mui/system';
import { ConsumptionTracker } from '../ConsumptionTracker/ConsumptionTracker'
import { DrinkWater } from '../DrinkWater/DrinkWater';
import { MainPageStyle } from './MainPage.styled';


export const MainPage = () => {
  return (
      <Container>
      <MainPageStyle>
        <ConsumptionTracker />
        <DrinkWater />
      </MainPageStyle>
       </Container>
    );
};