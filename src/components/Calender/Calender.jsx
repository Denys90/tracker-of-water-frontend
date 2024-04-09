import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMonthThunk } from '../../store/water/thunk';
import { selectMonth } from '../../store/water/selectors';

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
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonth); // Исправлено на monthData
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц с ведущим нулем, если нужно
  const year = currentDate.getFullYear().toString();

  useEffect(() => {
    // Загрузка данных о водном потреблении для текущего месяца
    dispatch(getMonthThunk({ date: `${month}.${year}` }));
  }, [dispatch, month, year]);

  // Обработчик изменения месяца
  const handleChangeMonth = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  // Генерация дней месяца
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

  // Обработчик клика по дню
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const length = generateMonthDays().length;
  // console.log(length);
  let currMonth = [];

  for (let i = 0; i <= length; i += 1) {
    let obj = {
      day: i.toString(),
      daily_limit: 2000,
      count: 0,
      percent: 0,
      id: '',
    };

    for (let a = 0; a < monthData.length; a++) {
      const asd = monthData[a];
      if (i.toString() === asd.date[1]) {
        // console.log('qwe');
        obj = {
          day: asd.date[1],
          daily_limit: asd.daily_limit,
          count: asd.count,
          percent: asd.percent,
          id: asd._id,
        };
      }
    }

    currMonth.push(obj);
  }
  // console.log('--------------------------------------------------', currMonth);
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
              {currentMonth.toLocaleDateString('en', {
                month: 'long',
                year: 'numeric',
              })}
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
            // console.log(typeof day);
            const isToday =
              currentDate.toDateString() === selectedDate.toDateString();

            // Проверяем, есть ли запись о водном потреблении для текущего дня

            const currDay = currMonth[day];
            // console.log(currDay);

            return (
              <div key={day - 1}>
                <DayButton
                  percent={currDay.percent ? currDay.percent : 0}
                  onClick={() => handleDayClick(day)}
                  className={isToday ? 'today' : ''}
                >
                  {day}
                </DayButton>
                <DayPercent>{`${currDay.percent}%`}</DayPercent>
              </div>
            );
          })}
        </DaysList>
      </CalenderWrapper>
      {selectedDay && (
        <Popover day={selectedDay}>
          <p>
            <span>
              {format(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth(),
                  selectedDay
                ),
                'd, MMMM'
              )}
            </span>
          </p>
          {monthData.map((entry) => {
            const entryDay = parseInt(entry.date.split('.')[0], 10);
            if (entryDay === selectedDay) {
              return (
                <div key={entry._id}>
                  <p>
                    Daily limit: <span>{entry.daily_limit / 1000} L</span>
                  </p>
                  <p>
                    Fulfillment of the daily limit:{' '}
                    <span>{entry.percent}%</span>
                  </p>
                  <p>
                    Number of water servings: <span>{entry.count}</span>
                  </p>
                </div>
              );
            }
            return null;
          })}
          {/* Добавляем условие для отображения сообщения, если данные отсутствуют */}
          {!monthData.some(
            (entry) =>
              parseInt(entry.date.split('.')[0], 10) === selectedDay &&
              entry.percent === 0
          ) && (
            <div>
              <p>You did not drink on this day.</p>
            </div>
          )}
          {/* Добавляем условие для отображения сообщения, если выбранная дата находится в будущем */}
          {new Date() <
            new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              selectedDay
            ) && (
            <div>
              <p>This day has not yet arrived.</p>
            </div>
          )}
        </Popover>
      )}
    </div>
  );
};
