// import useModal from 'hooks/useModal';
import {
  EditBtn,
  NormaDivWrapper,
  NormaTitle,
  NormaWrapper,
} from './NormaStyled';
import BodyModal from '../Modal/BodyModal';

import useModalNorma from './NormaModal';

export const Norma = () => {
  // const { daily_limit } = useSelector(selectUser);
  const daily_limit = 2000;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  const { isOpenModalNorma, toggleModal, popupRef } = useModalNorma();

  return (
    <NormaDivWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <NormaWrapper>
        <p>{waterNorma}</p>
        <EditBtn onClick={toggleModal} ref={popupRef}>
          Edit
        </EditBtn>
      </NormaWrapper>
      {isOpenModalNorma && (
        <BodyModal>
          <div>My daily norma</div>
        </BodyModal>
      )}
    </NormaDivWrapper>
  );
};
