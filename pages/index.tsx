import type { NextPage } from "next";
import Todo from "../components/todo";
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.main_container}>
      <Todo />
    </div>
  );
};

export default Home;
