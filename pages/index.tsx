import type { NextPage } from "next";
import CountdownTimer from "../components/CountdownTimer";
import Todo from "../components/Todo";
import styles from "../styles/home.module.css";
import dayjs from "dayjs";

const Home: NextPage = () => {
  return (
    <div className={styles.main_container}>
      <Todo />
      <CountdownTimer countdownTimestampMs={dayjs().year(2023).month(0).date(0).hour(0).minute(0).second(0)} />
    </div>
  );
};

export default Home;
