import { Norma } from 'components/Norma/Norma';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { DrinkList } from 'components/DrinkList/DrinkList';
import { Calender } from '../../components/Calender/Calender';
import {
  HomeRightWrapper,
  HomeLeftWrapper,
  HomeBox,
  HomeContainer,
  HomeSection,
} from 'pages/HomePage/HomePageSyled';

const HomePage = () => {
  return (
    <>
      <HomeSection>
        <HomeContainer>
          <HomeBox>
            <HomeLeftWrapper>
              <Norma />
              <ProgressBar />
            </HomeLeftWrapper>
            <HomeRightWrapper>
              <DrinkList />
              <Calender />
            </HomeRightWrapper>
          </HomeBox>
        </HomeContainer>
      </HomeSection>
    </>
  );
};

export default HomePage;
