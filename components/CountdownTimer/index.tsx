import style from "./timer.module.css";
import { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./utils";
import { Dayjs } from "dayjs";
import HolidayLights from "./HolidayLights";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

interface props {
  countdownTimestampMs: Dayjs;
}

const CountdownTimer = ({ countdownTimestampMs }: props) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown: Dayjs) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className={style.container}>
        <HolidayLights lightsNum={24}/>
        <h2>Until Happy New Year</h2>
            <div className={style.countdown_timer + ' ' + style.unselectable}>
              <span className={style.gradient}>{remainingTime.days}</span>
              <span className={style.gradient}>days</span>
              <span className={style.two_numbers + ' ' + style.gradient}>{remainingTime.hours}</span>
              <span  className={style.gradient}>hours</span>
              <span className={style.two_numbers + ' ' + style.gradient}>{remainingTime.minutes}</span>
              <span className={style.gradient} >minutes</span>
              <span className={style.two_numbers + ' ' + style.gradient}>{remainingTime.seconds}</span>
              <span className={style.gradient}>seconds</span>
        </div>
        
    </div>
  );
};
export default CountdownTimer;
