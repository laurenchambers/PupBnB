import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ value, onChange }) {
  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        minDate={new Date()}
      />
    </>
  );
}

export default CalendarComponent;
