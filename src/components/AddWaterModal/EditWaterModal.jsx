// import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import svg from 'assets/images/icons.svg';
import { Formik, ErrorMessage } from 'formik';
import useWater from 'hooks/useWaters';

import {
  BtnSave,
  AddParagraph,
  AddTime,
  FooterModal,
  Water,
  Label,
  ButtonMl,
  Icon,
  Title,
  Subtitle,
  BoxAddModal,
  StyledSelect,
  AddWaterContainer,
  Input,
  // StyledField,
} from './AddWaterModal.styled';
import { DrinkGlass, WaterItem } from './EditWaterModal.styled';

export const EditWaterModal = ({ toggleModal }) => {
  const [time, setTime] = useState('');
  const [timeOptions, setTimeOptions] = useState([]);
  const { addOneDrink } = useWater();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const newTimeOptions = [];

    for (let hour = currentHour; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        if (hour === currentHour && minute < currentMinute) {
          continue;
        }
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        const currentTime = `${formattedHour}:${formattedMinute}`;
        newTimeOptions.push(currentTime);
      }
    }

    const formattedHour = String(currentHour).padStart(2, '0');
    const formattedMinute = String(currentMinute).padStart(2, '0');
    const currentTime = `${formattedHour}:${formattedMinute}`;
    setTime(currentTime);
    setTimeOptions(newTimeOptions);
  }, []);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear());

  const formattedDate = `${day}.${month}.${year}`;

  const validateAmount = (value) => {
    let errorMessage = '';
    if (value > 5000) {
      errorMessage = 'The value cannot exceed 5000ml';
    }
    return errorMessage;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waterData = {
      time: time,
      amount: amount,
      date: formattedDate,
    };
    console.log(waterData);
    addOneDrink(waterData);
    setAmount(0);
    setTime('');
    toggleModal();
  };

  const decrementAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 50, 0));
  };

  const incrementAmount = () => {
    const newAmount = amount + 50;
    const maxAmount = 5000;
    setAmount(newAmount <= maxAmount ? newAmount : maxAmount);
  };

  return (
    <Formik initialValues={{ amount: 0, time }} onSubmit={handleSubmit}>
      {() => (
        <BoxAddModal>
          <AddWaterContainer>
            <Title>Edit the entered amount of water</Title>
            <WaterItem>
              <DrinkGlass>
                <use href={`${svg}#icon-glass`}></use>
              </DrinkGlass>
              <h4>{amount} ml</h4>
              <p>{time} AM</p>
            </WaterItem>
            <Subtitle>Choose a value:</Subtitle>

            <AddParagraph>Amount of water:</AddParagraph>
            <div>
              <ButtonMl type="button" onClick={decrementAmount}>
                <Icon>
                  <use href={`${svg}#icon-minus`}></use>
                </Icon>
              </ButtonMl>
              <Label>
                <Water>{amount} ml</Water>
              </Label>
              <ButtonMl type="button" onClick={incrementAmount}>
                <Icon>
                  <use href={`${svg}#icon-plus`}></use>
                </Icon>
              </ButtonMl>
            </div>
          </AddWaterContainer>
          <AddTime>
            <AddParagraph>Recording time:</AddParagraph>
            <StyledSelect
              name="time"
              style={{ width: '100%' }}
              onChange={(e) => setTime(e.target.value)}
            >
              <option key="current-time" value={time}>
                {time}
              </option>
              {timeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </StyledSelect>
          </AddTime>
          <div>
            <h3>Enter the value of the water used:</h3>
            <Input
              type="number"
              name="amount"
              validate={validateAmount}
              max={5000}
              value={amount}
            />
            <ErrorMessage name="amount" component="div" />
          </div>
          <FooterModal>
            <span>{amount}ml</span>
            <BtnSave type="submit" onClick={handleSubmit}>
              Save{' '}
            </BtnSave>
          </FooterModal>
        </BoxAddModal>
      )}
    </Formik>
  );
};
{
  // isSubmitting && <Loader />;
}
