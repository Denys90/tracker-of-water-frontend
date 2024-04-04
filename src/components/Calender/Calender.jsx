import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalenderWrapper,
  DaysList,
  PaginationWrapper,
  MonthButton,
  CalenderNav,
  DayButton,
  DayPercent,
} from './CalenderStyles';
import svg from '../../assets/images/icons.svg';
import { format } from 'date-fns';

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date()); // Установка текущего дня по умолчанию

  // Функция для изменения текущего месяца
  const handleChangeMonth = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  // Функция для генерации чисел текущего месяца
  const generateMonthDays = () => {
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const daysInMonth = lastDayOfMonth.getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // Функция для получения имени текущего месяца
  const getCurrentMonthName = () => {
    const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
    return monthFormatter.format(currentMonth);
  };

  // Функция для получения текущего года
  const getCurrentYear = () => {
    return currentMonth.getFullYear();
  };

  // Сохранение выбранного дня при клике
  const handleDayClick = (day) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const today = new Date(); // Получаем текущую дату
    if (selectedDate <= today) {
      // Проверяем, что выбранная дата не позже текущей
      setSelectedDay(selectedDate);
      console.log(format(selectedDate, 'dd.MM.yyyy'));
    } else {
      console.log('Выберите день не позже сегодняшней даты');
    }
  };

  return (
    <div>
      <CalenderWrapper>
        <CalenderNav>
          <h3>Month</h3>
          <PaginationWrapper>
            <MonthButton onClick={() => handleChangeMonth(-1)}>
              <use href={`${svg}#icon-left`}></use>
            </MonthButton>
            <span>
              {getCurrentMonthName()}, {getCurrentYear()}
            </span>
            <MonthButton onClick={() => handleChangeMonth(1)}>
              <use href={`${svg}#icon-right`}></use>
            </MonthButton>
          </PaginationWrapper>
        </CalenderNav>
        <DaysList>
          {generateMonthDays().map((day) => (
            <div key={day}>
              <DayButton onClick={() => handleDayClick(day)}>{day}</DayButton>
              <DayPercent>0%</DayPercent>
            </div>
          ))}
        </DaysList>
      </CalenderWrapper>
      {/* Отображение выбранного дня */}
      {selectedDay !== null && (
        <p>Selected day: {format(selectedDay, 'dd.MM.yyyy')}</p>
      )}
    </div>
  );
};
