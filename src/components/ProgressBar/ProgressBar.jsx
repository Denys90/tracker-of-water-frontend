import { ProgressDivWrapper } from './ProgressBarStyled';
import { ProgressTitle } from './ProgressBarStyled';

export const ProgressBar = () => {
  return (
    <>
      <ProgressDivWrapper>
        <div>
          <ProgressTitle>Today</ProgressTitle>
          <div></div>
        </div>
        <button>Add Water</button>
      </ProgressDivWrapper>
    </>
  );
};
