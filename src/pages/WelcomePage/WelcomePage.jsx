import { MainPage } from 'components/MainPage/MainPage/MainPage';
import { AddWaterModal } from 'src/components/AddWaterModal/AddWaterModal';
// import BodyModal from '../../components/Modal/BodyModal';

const WelcomePage = () => {
  return (
    <>
      <MainPage />
      {/* <BodyModal> */}
        <AddWaterModal />
      {/* </BodyModal> */}
    </>
  );
};

export default WelcomePage;
