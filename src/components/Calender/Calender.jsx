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
  Popover,
} from './CalenderStyles';

import svg from '../../assets/images/icons.svg';
import { format } from 'date-fns';

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null); // Установка текущего дня по умолчанию
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

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

  // Обработчик клика по дню
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
      // Устанавливаем позицию поповера
      setPopoverPosition({ x: event.clientX, y: event.clientY });
    } else {
      // Выводим сообщение, если выбранная дата уже прошла
      alert('Выберите день не позже сегодняшней даты');
    }
  };

  // Закрытие поповера
  const closePopover = () => {
    setSelectedDay(null);
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
              <DayButton onClick={(e) => handleDayClick(day, e)}>
                {day}
              </DayButton>
              <DayPercent>0%</DayPercent>
            </div>
          ))}
        </DaysList>
      </CalenderWrapper>

      {/* Поповер */}
      {selectedDay && (
        <Popover style={{ top: popoverPosition.y, left: popoverPosition.x }}>
          <p>Selected day: {format(selectedDay, 'dd.MM.yyyy')}</p>
          <button onClick={closePopover}>Close</button>
        </Popover>
      )}
    </div>
  );
};
