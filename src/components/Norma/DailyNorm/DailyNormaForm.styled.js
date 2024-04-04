import styled from '@emotion/styled';
import { Field } from 'formik';
import { theme } from 'styles/theme';

export const ModalTitle = styled.h2`
  font-size: 26px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 24px;
`;
export const ModalFormulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 24px;

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
  color: blue;
`;

export const ModalFormulaText = styled.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
`;

export const ModalTextNote = styled.p`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 1.3;
  margin: 0;
`;
export const ModalTextStar = styled.span`
  color: blue;
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

export const ModalLabel = styled.label`
  font-size: 16px;
  line-height: 1.25;
  /* margin-bottom: 8px; */
`;
export const FormField = styled(Field)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  padding: 12px 10px;
  color: blue;
  font-size: 16px;
  width: 100%;
`;

export const ModalWriteWater = styled.div``;

export const ModalButtonSave = styled.button`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  /* min-width: 280px; */
  height: 36px;
  gap: 10px;
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
