// import useModal from 'hooks/useModal';
import {
  EditBtn,
  NormaDivWrapper,
  NormaTitle,
  NormaWrapper,
} from './NormaStyled';
import BodyModal from '../Modal/BodyModal';
import useModal from '../../hooks/useModal';

export const Norma = () => {
  // const { daily_limit } = useSelector(selectUser);
  const daily_limit = 2000;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  const { isOpenModal, toggleModal } = useModal();

  return (
    <NormaDivWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <NormaWrapper>
        <p>{waterNorma}</p>
        <EditBtn onClick={toggleModal}>Edit</EditBtn>
      </NormaWrapper>
      {isOpenModal && (
        <BodyModal>
          <div>Children</div>
        </BodyModal>
      )}
    </NormaDivWrapper>
  );
};
