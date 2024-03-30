import {
  ProgressDivWrapper,
  ProgressTitle,
  ProgressBox,
  DrinkPer,
  // BarLabel,
  DrinkBar,
  MarksContainer,
  LeftMark,
  RightMark,
  Mark,
} from './ProgressBarStyled';
// import { useState } from 'react';

export const ProgressBar = () => {
  // const [progress, setProgress] = useState(50);

  return (
    <>
      <ProgressDivWrapper>
        <div>
          <ProgressTitle>Today</ProgressTitle>
          <ProgressBox>
            <DrinkBar>
              <DrinkPer>{/* <BarLabel>{progress}%</BarLabel> */}</DrinkPer>
            </DrinkBar>
            <MarksContainer>
              <LeftMark>0%</LeftMark>
              <Mark>50%</Mark>
              <RightMark>100%</RightMark>
            </MarksContainer>
          </ProgressBox>
        </div>
        <button>Add Water</button>
      </ProgressDivWrapper>
    </>
  );
};
