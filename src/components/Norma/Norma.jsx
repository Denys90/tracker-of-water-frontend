import { useState } from 'react';

import {
  NormaAllWrapper,
  NormaWrapper,
  NormaTitle,
  BackgroundHome,
  DailyBox,
  EditButton,
} from './NormaStyled';

import Modal from 'components/Modal/Modal';

export const Norma = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const daily_limit = 2000;
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
          <h2>My daily norma</h2>
        </Modal>
      )}
    </DailyBox>
  );
};
