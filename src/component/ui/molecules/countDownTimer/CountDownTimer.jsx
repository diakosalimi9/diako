import React from 'react';
// import TimesDown from './TimesDown';
import TimesDown from '../timesdown/TimesDown';
import { useCountdown } from '../../../../hooks/useCountDown';
import ShowCounter from '../ShowCounter/ShowCounter';
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}/>
    );
};
export default CountdownTimer;