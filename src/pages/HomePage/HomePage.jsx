import { Norma } from 'components/Norma/Norma';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { DrinkLink } from 'components/DrinkList/DrinkList';
import { Calender } from '../../components/Calender/Calender';

const HomePage = () => {
  return (
    <>
      <h2>Home Page</h2>
      <Norma />
      <ProgressBar />
      <div>
        <DrinkLink />
        <Calender />
      </div>
    </>
  );
};

export default HomePage;
