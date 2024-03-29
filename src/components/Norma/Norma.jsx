import { NormaDivWrapper, NormaTitle, NormaWrapper } from './NormaStyled';

export const Norma = () => {
  return (
    <NormaDivWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <NormaWrapper>
        <p>1.5 L</p>
        <button>Edit</button>
      </NormaWrapper>
    </NormaDivWrapper>
  );
};
