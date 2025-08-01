import React from 'react';
// import TimesDown from './TimesDown';
import TimesDown from '../timesdown/TimesDown';
import { useCountdown } from '../../../../hooks/useCountDown';
import ShowCounter from '../ShowCounter/ShowCounter';
import Expired from '../Expired/Expired';
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <>
      {seconds < 0 ? (

          <Expired />

      ) : (

          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds} />

      )}
    </>
  );
};
export default CountdownTimer;