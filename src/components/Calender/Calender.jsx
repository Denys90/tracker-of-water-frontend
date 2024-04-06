import { useState, useRef, useEffect } from 'react';
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
  // ====================================
  // взяла приклад з документації
  const oneitem = {
    date: '04.04.2024',
    daily_limit: 2000,
    water_entries: [
      {
        time: '9:41',
        amount: 250,
        date: '02.04.2024',
      },
      {
        time: '19:58',
        amount: 250,
        date: '02.04.2024',
      },
    ],
    owner: '660ab1bf135b46797793af4f',
    count: 5,
    percent: 80,
  };

  // перераховуємо ліміт в потрібний формат
  // !!!передати денну норму в мл
  const daily_limit = oneitem.daily_limit;
  const waterNorma = (daily_limit / 1000).toFixed(1) + ' L';
  // ====================================

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const popoverRef = useRef(null);

  // зміна місяця
  const handleChangeMonth = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  // генерація днів місяця
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

  // назва місяця
  const getCurrentMonthName = () => {
    const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
    return monthFormatter.format(currentMonth);
  };

  // поточний рік
  const getCurrentYear = () => {
    return currentMonth.getFullYear();
  };

  // клік по дню
  const handleDayClick = (day, event) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const today = new Date(); // поточна дата
    if (selectedDate <= today) {
      // Перевіряємо, що обрана дата не пізніше за поточну
      setSelectedDay(selectedDate);
      // Встановлюємо позицію поповера
      setPopoverPosition({ x: event.clientX, y: event.clientY });
    } else {
      // Виводимо повідомлення, якщо обрана дата вже пройшла
      alert('This date has not yet arrived. Please select a previous day.');
    }
  };

  // Закриття поповера при натисканні за його межами
  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setSelectedDay(null);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          {generateMonthDays().map((day) => {
            const currentDate = new Date();
            const selectedDate = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day
            );
            const isToday =
              currentDate.toDateString() === selectedDate.toDateString();

            return (
              <div key={day}>
                <DayButton
                  onClick={(e) => handleDayClick(day, e)}
                  className={isToday ? 'today' : ''}
                >
                  {day}
                </DayButton>
                {/* ==================================== */}
                {/* передати відсотки */}
                <DayPercent>{oneitem.percent}%</DayPercent>
              </div>
            );
          })}
        </DaysList>
      </CalenderWrapper>

      {/* ==================================== */}
      {/* Поповер */}
      {selectedDay && (
        <Popover
          ref={popoverRef}
          style={{ top: popoverPosition.y, left: popoverPosition.x }}
        >
          <p>
            <span>{format(selectedDay, 'd, MMMM')}</span>
          </p>
          <p>
            Daily norma: <span>{waterNorma}</span>
          </p>
          <p>
            {/* передати відсотки */}
            Fulfillment of the daily norm: <span>{oneitem.percent}%</span>
          </p>
          <p>
            {/* передати підходи */}
            {/*oneitem.water_entries.length*/}
            How many servings of water: <span>{oneitem.count}</span>
          </p>
        </Popover>
      )}
    </div>
  );
};
