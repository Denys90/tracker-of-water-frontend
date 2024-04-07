import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import svg from 'assets/images/icons.svg';

import { format } from 'date-fns';

import { globalLoadingSelector } from '../../root/selectors';

import {
  BtnSave,
  AddParagraph,
  AddTime,
  AddWater,
  FooterModal,
  Input,
  InputTime,
  Water,
  Label,
  ButtonMl,
  Icon,
  Title,
  Subtitle,
  BoxAddModal,
  ErrorMessage,
} from './AddWaterModal.styled';
import useWater from 'hooks/useWaters';

export const AddWaterModal = ({ onClose, initialTime, toggleModal }) => {
  const initialAmount = 0;
  const [amount, setAmount] = useState(initialAmount || 0);
  const [time, setTime] = useState('');

  const { addWater } = useWater();

  useEffect(() => {
    let roundedTime;
    if (initialTime) {
      const date = new Date(initialTime);
      const minutes = Math.round(date.getMinutes() / 5) * 5; // Округлення до найближчого кратного 5 хвилинам
      date.setMinutes(minutes);
      roundedTime = format(date, 'HH:mm');
    } else {
      const now = new Date();
      const minutes = Math.round(now.getMinutes() / 5) * 5;
      now.setMinutes(minutes);
      roundedTime = format(now, 'HH:mm');
    }
    setTime(roundedTime);
  }, [initialTime]);

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
    addWater(waterData).then((data) => {
      if (!data.error) {
        onClose();
        setAmount(0);
      }
      toggleModal();
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
      <BoxAddModal onClose={onClose}>
        <AddWater>
          <Title>Add Water</Title>
          <Subtitle>Choose a value:</Subtitle>

          <AddParagraph>Amount of water:</AddParagraph>
          <div>
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
          </div>
        </AddWater>
        <AddTime>
          <AddParagraph>Recording time:</AddParagraph>
          <InputTime
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            step={300}
          />
        </AddTime>
        <div>
          <h3>Enter the value of the water used:</h3>
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
        </div>
        <FooterModal>
          <span>{amount}ml</span>
          <BtnSave onClick={handleSubmit}>
            Save {isLoading && <Loader />}
          </BtnSave>
        </FooterModal>
      </BoxAddModal>
    </>
  );
};
