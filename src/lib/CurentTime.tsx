'use client';
import React, { useState, useEffect } from 'react';
import { format, toZonedTime } from 'date-fns-tz';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const newTime = format(
        toZonedTime(new Date(), 'Europe/Belgrade'),
        'hh:mm a',
      );
      setCurrentTime(newTime);
    };

    updateCurrentTime(); // Update time immediately on component mount
    const intervalId = setInterval(updateCurrentTime, 60000); // Update time every minute

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return <span>{currentTime}</span>;
};

export default CurrentTime;
