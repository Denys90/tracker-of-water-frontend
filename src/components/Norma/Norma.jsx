import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  NormaAllWrapper,
  NormaWrapper,
  NormaTitle,
  BackgroundHome,
  DailyBox,
  EditButton,
} from './NormaStyled';

import Modal from 'components/Modal/Modal';
import WaterCalculator from './DailyNorm/DailyNormaForm';
import { selectDailyNorm } from '../../store/water/selectors';

export const Norma = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const daily_limit = useSelector(selectDailyNorm);
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  return (
    <DailyBox>
      <NormaAllWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <NormaWrapper>
          <p>{waterNorma}</p>
          <EditButton type="button" onClick={toggleModal}>
            Edit
          </EditButton>
        </NormaWrapper>
      </NormaAllWrapper>
      <BackgroundHome />
      {isOpen && (
        <Modal onClose={toggleModal}>
          <WaterCalculator />
        </Modal>
      )}
    </DailyBox>
  );
};
