// import useModal from 'hooks/useModal';
import {
  NormaAllWrapper,
  NormaWrapper,
  NormaTitle,
  BackgroundHome,
  DailyBox,
} from './NormaStyled';
import BodyModal from '../Modal/BodyModal';

import useModalNorma from './NormaModal';

export const Norma = () => {
  // const { daily_limit } = useSelector(selectUser);
  const daily_limit = 2000;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  const { isOpenModalNorma, toggleModal, popupRef } = useModalNorma();

  return (
    <DailyBox>
      <NormaAllWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <NormaWrapper>
          <p>{waterNorma}</p>
          <a onClick={toggleModal} ref={popupRef}>
            Edit
          </a>
        </NormaWrapper>
        {isOpenModalNorma && (
          <BodyModal>
            <div>My daily norma</div>
          </BodyModal>
        )}
      </NormaAllWrapper>
      <BackgroundHome />
    </DailyBox>
  );
};
