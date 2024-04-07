import Loader from '../Loader/Loader';
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

export const AddWaterModal = () => {
  const [time, setTime] = useState('');
  const [timeOptions, setTimeOptions] = useState([]);
  const { addWater } = useWater();
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

  const validateAmount = (value) => {
    let errorMessage = '';
    if (value > 5000) {
      errorMessage = 'The value cannot exceed 5000ml';
    }
    return errorMessage;
  };

  // const handleSubmit = (values, actions) => {
  //   const waterData = {
  //     waterVolume: amount,
  //     date: values.time,
  //   };
  //   console.log(waterData);
  //   addWater(waterData);
  //   setAmount(0);
  //   setTime('');
  //   actions.setSubmitting(false);
  // };

  const decrementAmount = () => {
    setAmount((prevAmount) => Math.max(prevAmount - 50, 0));
  };

  const incrementAmount = () => {
    const newAmount = amount + 50;
    const maxAmount = 5000;
    setAmount(newAmount <= maxAmount ? newAmount : maxAmount);
  };

  return (
    <Formik
      initialValues={{ amount: 0, time }}
      onSubmit={(values) => {
        const waterData = {
          waterVolume: amount,
          date: values.time,
        };
        console.log(waterData);
        addWater(waterData);
        setAmount(0);
        setTime('');
        // actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <BoxAddModal>
          <AddWaterContainer>
            <Title>Add Water</Title>
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
            <StyledSelect name="time" style={{ width: '100%' }}>
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
            <BtnSave type="submit">Save {isSubmitting && <Loader />}</BtnSave>
          </FooterModal>
        </BoxAddModal>
      )}
    </Formik>
  );
};
