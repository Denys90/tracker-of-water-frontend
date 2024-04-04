import {
  NormaAllWrapper,
  NormaWrapper,
  NormaTitle,
  BackgroundHome,
  DailyBox,
} from './NormaStyled';

export const Norma = () => {
  const daily_limit = 2000;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  return (
    <DailyBox>
      <NormaAllWrapper>
        <NormaTitle>My daily norma</NormaTitle>
        <NormaWrapper>
          <p>{waterNorma}</p>
          <a>Edit</a>
        </NormaWrapper>
      </NormaAllWrapper>
      <BackgroundHome />
    </DailyBox>
  );
};
