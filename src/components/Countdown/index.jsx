import React, { useCallback, useEffect, useState } from 'react'
import CountdownItem from './Item';

const Countdown = () => {
  const theDate = new Date('Nov 17, 2022 08:00:00').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    let now = new Date().getTime();
    let timeleft = theDate - now;
    setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
  }, [theDate]);

  useEffect(() => {
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, [getTime]);

  return (
    <div className='grid w-full grid-cols-4 lg:gap-5 lg:w-1/2'>
      <CountdownItem num={days} label="hari"/>
      <CountdownItem num={hours} label="jam"/>
      <CountdownItem num={minutes} label="menit"/>
      <CountdownItem num={seconds} label="detik"/>
    </div>
  )
}

export default Countdown