import styled from '@emotion/styled';
import { Field } from 'formik';
import { theme } from 'styles/theme';

export const ModalTitle = styled.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`;
export const ModalFormulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const ModalFormula = styled.p`
  font-size: 16px;
`;

export const ModalFormulaSpan = styled.span`
  font-size: 18px;
  color: ${theme.colors.blue};
`;

export const ModalFormulaText = styled.div`
  border: 1px solid ${theme.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`;

export const ModalTextNote = styled.p`
  color: ${theme.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;
export const ModalTextStar = styled.span`
  color: ${theme.colors.blue};
`;

export const ModalCalculate = styled.div`
  margin-bottom: 24px;
`;

export const ModalCalcTitle = styled.h3`
  margin-bottom: 16px;
  margin-top: 0;
`;

export const ModalRadioContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`;

export const ModalContainerInput = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`;

export const ModalLabel = styled.label``;
export const ModalWriteWater = styled.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${theme.colors.blue};
    font-weight: bold;
  }
`;

export const ModalLabelText = styled.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${theme.colors.black};
`;
export const FormField = styled(Field)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${theme.colors.paleBlue};
  padding: 12px 10px;
  color: blue;
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: ${theme.colors.paleBlue};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }
`;

export const ModalButtonSave = styled.button`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  height: 36px;

  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #407bff;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(64, 123, 255, 0.54) 0px 4px 14px;
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: ${theme.breakpoint.desktop}) {
    /* width: 384px; */
  }
`;

export const ModalCalculateWater = styled.div`
  width: 280px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${theme.breakpoint.desktop}) {
    min-width: 592px;
  }
`;
