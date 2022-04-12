import dayjs from "dayjs";
import CountdownTimer from "../CountdownTimer";
import Todo from "../Todo";
import Welcome from "../Welcome";
import style from './main.module.css'

const Main = () => {
  return (
    <div className={style.main_container}>
      <Welcome />
      <Todo />
      <CountdownTimer
        countdownTimestampMs={dayjs()
          .year(2023)
          .month(0)
          .date(0)
          .hour(0)
          .minute(0)
          .second(0)}
      />
    </div>
  );
};

export default Main;
