import styled from '@emotion/styled';

export const Norma = () => {
  return (
    <NormaDivWrapper>
      <NormaTitle>My daily norma</NormaTitle>
      <div>
        <p>1.5 L</p>
        <button>Edit</button>
      </div>
    </NormaDivWrapper>
  );
};

export const NormaDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NormaTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Roboto-Medium';
  jc: flex;
`;
