import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calender = () => {
  return (
    <>
      <div>
        <div>
          <h3>Month</h3>
          <div>
            <div>-</div>
            <div>month</div>
            <div>-</div>
          </div>
        </div>
        <div>
          {' '}
          <DatePicker
            // selected={selectedDate}
            // onChange={handleDateChange}
            // customInput={
            // <InputField style={{ cursor: 'pointer' }}
            ///>
            dateFormat={'dd.MM.yyyy'}
            calendarStartDay={1}
            formatWeekDay={(day) => day.substring(0, 1)}
          />
        </div>
      </div>
    </>
  );
};
