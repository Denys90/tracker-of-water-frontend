// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { NormaDivWrapper, NormaTitle, NormaWrapper } from './NormaStyled';

export const Norma = () => {
  // const { daily_limit } = useSelector(selectUser);
  const daily_limit = 2000;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';

  return (
    <NormaDivWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <NormaWrapper>
        <p>{waterNorma}</p>
        <a>Edit</a>
      </NormaWrapper>
    </NormaDivWrapper>
  );
};
