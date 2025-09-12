import moment from "moment/moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function BigCalendar() {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      start: moment().toDate(),
      end: moment().add(2, "days").toDate(),
      //   end: moment().add(1, "days").toDate(),
      title: "Class at 10 PM",
    },
  ];
  return (
    <div>
      <Calendar
        defaultView="month"
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
