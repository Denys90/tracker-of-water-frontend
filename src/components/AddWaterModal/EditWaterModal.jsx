import Loader from '../Loader/Loader';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import svg from 'assets/images/icons.svg';
import { globalLoadingSelector } from '../../root/selectors';
import { patchWatersThunk } from '../../store/water/thunk';

import { ErrorMessage, StyledSelect } from './AddWaterModal.styled';

import {
  BoxEditModal,
  EditWater,
  Title,
  WaterItem,
  Subtitle,
  AddParagraph,
  ButtonMl,
  Icon,
  Label,
  Water,
  EditMenu,
  AddDelWater,
  EditTime,
  EditItemWater,
  FooterModal,
  BtnSave,
  Input,
  DrinkGlass,
} from './EditWaterModal.styled';

export const EditWaterModal = ({
  onClose,
  waterId,
  initialAmount,
  initialTime,
}) => {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [time, setTime] = useState(initialTime || '');

  const dispatch = useDispatch();
  const { isLoading } = useSelector(globalLoadingSelector);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAmountChange = (e) => {
    let newValue = e.target.value;
    if (newValue > 5000) {
      setErrorMessage('The value cannot exceed 5000ml');
      return;
    } else {
      setErrorMessage('');
    }

    if (newValue.startsWith('0') && newValue.length > 1) {
      newValue = parseFloat(newValue.substring(1));
    }
    setAmount(newValue.toString());
  };

  const handleSubmit = () => {
    const waterData = {
      waterVolume: amount,
      date: time,
    };
    dispatch(patchWatersThunk(waterId, waterData)).then((data) => {
      if (!data.error) {
        onClose();
      }
    });
  };

  const minusAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 50, 0));
  };

  const plusAmount = () => {
    const newAmount = amount + 50;
    const maxAmount = 5000;
    setAmount(newAmount <= maxAmount ? newAmount : maxAmount);
  };

  return (
    <>
      <BoxEditModal onClose={onClose}>
        <Title>Edit the entered amount of water</Title>
        <EditMenu>
          <WaterItem>
            <DrinkGlass>
              <use href={`${svg}#icon-glass`}></use>
            </DrinkGlass>
            <h4>{amount} ml</h4>
            <p>
              {time}
              <span> AM</span>
            </p>
          </WaterItem>
          <EditWater>
            <Subtitle>Correct entered date:</Subtitle>
            <AddParagraph>Amount of water:</AddParagraph>
            <AddDelWater>
              <ButtonMl onClick={minusAmount}>
                <Icon>
                  <use href={`${svg}#icon-minus`}></use>
                </Icon>
              </ButtonMl>
              <Label>
                <Water>{amount} ml</Water>
              </Label>
              <ButtonMl onClick={plusAmount}>
                <Icon>
                  <use href={`${svg}#icon-plus`}></use>
                </Icon>
              </ButtonMl>
            </AddDelWater>
          </EditWater>
          <EditTime>
            <AddParagraph>Recording time:</AddParagraph>
            <StyledSelect
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{ width: '100%' }}
            >
              <option key="current-time" value={time}>
                {time}
              </option>
            </StyledSelect>
          </EditTime>
          <EditItemWater>
            <Subtitle>Enter the value of the water used:</Subtitle>
            <Input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              onBlur={() =>
                setAmount((prevAmount) => prevAmount || initialAmount || 0)
              }
              max={5000}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </EditItemWater>
        </EditMenu>
        <FooterModal>
          <span>{amount}ml</span>
          <BtnSave onClick={handleSubmit}>
            Save {isLoading && <Loader />}
          </BtnSave>
        </FooterModal>
      </BoxEditModal>
    </>
  );
};
