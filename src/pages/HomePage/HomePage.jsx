import { ContainerStyles } from 'components/Container/ContainerStyles.styled';
import { Norma } from 'components/Norma/Norma';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { DrinkList } from 'components/DrinkList/DrinkList';
import { Calender } from '../../components/Calender/Calender';
import { HomeRightWrapper } from 'pages/HomePage/HomePageSyled';

const HomePage = () => {
  return (
    <>
      <ContainerStyles>
        <Norma />
        <ProgressBar />
        <HomeRightWrapper>
          <DrinkList />
          <Calender />
        </HomeRightWrapper>
      </ContainerStyles>
    </>
  );
};

export default HomePage;
