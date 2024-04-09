import { useState } from 'react';
import {
  ProgressDivWrapper,
  ProgressTitle,
  ProgressBox,
  DrinkPer,
  DrinkBar,
  MarksContainer,
  LeftMark,
  RightMark,
  Mark,
  ProgressDiv,
  AddWaterProgress,
} from './ProgressBarStyled';

import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';

import svg from 'assets/images/icons.svg';
import Modal from 'components/Modal/Modal';

import { useSelector } from 'react-redux';

import { selectWaterObj } from '../../store/water/selectors';

export const ProgressBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const water = useSelector(selectWaterObj);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const waterPercentage = water.percent;

  return (
    <ProgressDivWrapper>
      <ProgressDiv>
        <ProgressTitle>Today</ProgressTitle>
        <ProgressBox>
          <DrinkBar>
            <DrinkPer style={{ width: `${Math.min(waterPercentage, 100)}%` }} />
          </DrinkBar>
          <MarksContainer>
            <LeftMark>0%</LeftMark>
            {waterPercentage < 100 && waterPercentage > 0 && (
              <Mark left={`${waterPercentage}%`}>{waterPercentage}%</Mark>
            )}
            <RightMark>100%</RightMark>
          </MarksContainer>
        </ProgressBox>
      </ProgressDiv>

      <AddWaterProgress onClick={toggleModal}>
        <svg>
          <use href={`${svg}#icon-outline`}></use>
        </svg>
        Add water
      </AddWaterProgress>

      {isOpen && (
        <Modal onClose={toggleModal}>
          <AddWaterModal toggleModal={toggleModal} />
        </Modal>
      )}
    </ProgressDivWrapper>
  );
};
