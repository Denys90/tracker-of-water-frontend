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
} from './ProgressBarStyled';
import { AddWater } from '../../styles/btnStyles';
import BodyModal from '../Modal/BodyModal';

import useModalProgressBar from './ProgressBarModal';

// import useModal from 'hooks/useModal';

// import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const { isOpenModalBar, toggleModal, popupRef } = useModalProgressBar();

  // const waterPercentage = useSelector((state) => state.waterPercentage); // % from Redux

  //exepmple
  const waterPercentage = 48;

  return (
    <ProgressDivWrapper>
      <ProgressDiv>
        <ProgressTitle>Today</ProgressTitle>
        <ProgressBox>
          <DrinkBar>
            {/* do not fill more than 100 per */}
            <DrinkPer style={{ width: `${Math.min(waterPercentage, 100)}%` }} />
          </DrinkBar>
          <MarksContainer>
            <LeftMark>0%</LeftMark>
            {/* show the mark between 1 and 100 per */}
            {waterPercentage < 100 && waterPercentage > 0 && (
              <Mark left={`${waterPercentage}%`}>{waterPercentage}%</Mark>
            )}
            <RightMark>100%</RightMark>
          </MarksContainer>
        </ProgressBox>
      </ProgressDiv>

      <AddWater onClick={toggleModal} ref={popupRef}>
        Add water
      </AddWater>
      {isOpenModalBar && (
        <BodyModal>
          <div>Add water</div>
        </BodyModal>
      )}
    </ProgressDivWrapper>
  );
};
