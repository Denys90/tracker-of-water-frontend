import { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalenderWrapper,
  DaysList,
  PaginationWrapper,
  MonthButton,
  CalenderNav,
} from './CalenderStyles';

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
    // const firstDayOfMonth = new Date(
    //   currentMonth.getFullYear(),
    //   currentMonth.getMonth(),
    //   1
    // );
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

  return (
    <div>
      <CalenderWrapper>
        <CalenderNav>
          <h3>{getCurrentMonthName()}</h3>
          <PaginationWrapper>
            <MonthButton onClick={() => handleChangeMonth(-1)}>
              Previous
            </MonthButton>
            {/* Выводим имя текущего месяца */}
            <div>
              {getCurrentMonthName()}, {getCurrentYear()}
            </div>
            <MonthButton onClick={() => handleChangeMonth(1)}>Next</MonthButton>
          </PaginationWrapper>
        </CalenderNav>

        <DaysList>
          {/* Вывод чисел текущего месяца */}
          {generateMonthDays().map((day) => (
            <div key={day}>{day}</div>
          ))}
        </DaysList>

        {/* Компонент DatePicker для выбора даты */}
        {/* <DatePicker
          dateFormat={'dd.MM.yyyy'}
          selected={currentMonth}
          onChange={setCurrentMonth}
        /> */}
      </CalenderWrapper>
    </div>
  );
};
