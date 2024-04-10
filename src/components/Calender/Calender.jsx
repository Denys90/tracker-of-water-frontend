import { useState, useEffect, useRef } from 'react';
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
  const monthData = useSelector(selectMonth);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const currentDate = new Date();
  const popoverRef = useRef(null);

  useEffect(() => {
    const month = (currentMonth.getMonth() + 1).toString().padStart(2, '0');
    const year = currentMonth.getFullYear().toString();
    dispatch(getMonthThunk({ date: `${month}.${year}` }));
  }, [dispatch, currentMonth]);

  const handleChangeMonth = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

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

  const handleDayClick = (day) => {
    setSelectedDay(parseInt(day));
    setIsPopoverOpen(true);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsPopoverOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currMonth = generateMonthDays().map((day) => {
    const foundDay = monthData.find(
      (entry) => parseInt(entry.date.split('.')[0], 10) === day
    );
    return {
      day: day.toString(),
      daily_limit: foundDay ? foundDay.daily_limit : 2000,
      count: foundDay ? foundDay.count : 0,
      percent: foundDay ? foundDay.percent : 0,
      id: foundDay ? foundDay._id : '',
    };
  });

  return (
    <div>
      <CalenderWrapper>
        <CalenderNav>
          <h3>Month</h3>
          <PaginationWrapper>
            <MonthButton onClick={() => handleChangeMonth(-1)}>
              <svg>
                <use href={`${svg}#icon-left`}></use>
              </svg>
            </MonthButton>
            <span>
              {currentMonth.toLocaleDateString('en', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <MonthButton onClick={() => handleChangeMonth(1)}>
              <svg>
                <use href={`${svg}#icon-right`}></use>
              </svg>
            </MonthButton>
          </PaginationWrapper>
        </CalenderNav>
        <DaysList>
          {currMonth.map((currDay) => {
            const selectedDate = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              parseInt(currDay.day)
            );

            const isToday =
              currentDate.toDateString() === selectedDate.toDateString();

            return (
              <div key={currDay.day}>
                <DayButton
                  percent={currDay.percent}
                  onClick={() => handleDayClick(currDay.day)}
                  className={
                    selectedDay === parseInt(currDay.day) || isToday
                      ? 'today'
                      : ''
                  }
                >
                  {currDay.day}
                </DayButton>
                <DayPercent>{`${currDay.percent}%`}</DayPercent>
              </div>
            );
          })}
        </DaysList>
      </CalenderWrapper>

      {selectedDay && isPopoverOpen && (
        <Popover ref={popoverRef}>
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

          {!monthData.some(
            (entry) =>
              parseInt(entry.date.split('.')[0], 10) === selectedDay &&
              entry.percent > 0
          ) && (
            <div>
              <p>You did not drink on this day.</p>
            </div>
          )}
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
