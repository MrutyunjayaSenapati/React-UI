import React, { useState, useEffect } from 'react';

export default function Interval() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString()); // Format the time for better readability
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='text-center'>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
}
