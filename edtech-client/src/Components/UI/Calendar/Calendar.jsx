import { useState, useCallback } from "react";

/**
 * Helper function to get the number of days in a given month and year.
 * @param {number} year - The year (e.g., 2023).
 * @param {number} month - The month (0-indexed, 0 for January, 11 for December).
 * @returns {number} The number of days in the month.
 */
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Helper function to get the day of the week for the first day of the month.
 * @param {number} year - The year.
 * @param {number} month - The month (0-indexed).
 * @returns {number} The day of the week (0 for Sunday, 6 for Saturday).
 */
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

/**
 * Helper function to get the name of the month.
 * @param {number} monthIndex - The 0-indexed month number.
 * @returns {string} The full name of the month.
 */
const getMonthName = (monthIndex) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
};

/**
 * Helper function to get an array of weekday names.
 * @returns {string[]} An array of abbreviated weekday names.
 */
const getWeekdays = () => {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
};

/**
 * Calendar component displays a navigable month calendar.
 */
const Calendar = () => {
  // State to keep track of the currently displayed month and year
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date(); // To highlight today's date

  // Calculate calendar grid properties
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth); // 0 = Sunday, 1 = Monday, etc.
  const weekdays = getWeekdays();

  /**
   * Navigates to the previous month.
   */
  const goToPrevMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newMonth = prevDate.getMonth() - 1;
      const newYear = prevDate.getFullYear();
      return new Date(newYear, newMonth, 1);
    });
  }, []);

  /**
   * Navigates to the next month.
   */
  const goToNextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const newMonth = prevDate.getMonth() + 1;
      const newYear = prevDate.getFullYear();
      return new Date(newYear, newMonth, 1);
    });
  }, []);

  // Generate an array of days to render in the grid
  const calendarDays = [];

  // Add leading empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  // Add actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const events = {
    courseName: "Introduction to Python",
    startDate: "10 Aug 2025",
    endDate: "25 Aug 2025",
  };
  const start = events.startDate.split(" ")[0];
  const end = events.endDate.split(" ")[0];
  console.log(calendarDays);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
      {/* Calendar Header: Month, Year, and Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={goToPrevMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-primary"
          aria-label="Previous month"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-primary">
          {getMonthName(currentMonth)} {currentYear}
        </h2>
        <button
          onClick={goToNextMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-primary"
          aria-label="Next month"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Weekdays Row */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-primary mb-4">
        {weekdays.map((day, idx) => (
          <div key={idx} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => (
          <div
            key={index} // Using index as key for nulls and unique days
            className={`flex items-center justify-center h-10 w-10 rounded-full text-center text-gray-800
                        ${day === null ? "invisible" : ""}
                        ${
                          day === today.getDate() &&
                          currentMonth === today.getMonth() &&
                          currentYear === today.getFullYear()
                            ? "bg-primary text-white font-bold" // Highlight today
                            : "hover:bg-gray-100 transition-colors duration-150 cursor-pointer" // Default day style
                        }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
