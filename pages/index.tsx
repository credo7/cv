import type { NextPage } from "next";
import styles from "../styles/home.module.css";
import Main from "../components/Main";
import LeftAside from "../components/LeftAside";
import RightAside from "../components/RightAside";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar_primary}>
          <LeftAside />
      </aside>
      <div className={styles.second_container}>
        <div className={styles.main_container}>
          <Main />
        </div>

        <div className={styles.sidebar_secondary}>
          <RightAside />
        </div>
      </div>
    </div>
  );
};

export default Home;
