import { useMemo } from "react";
import style from "./leftAside.module.css";

const skills = [
  "Html",
  "CSS",
  "JS",
  "ReactJS",
  "Redux",
  "NextJS",
  "TS",
  "Docker",
  "Postgres",
  "SQL",
  "TypeORM",
  "Prisma",
  "Git",
  "CMD",
  "RESP API",
  "NodeJS",
  "NestJS",
  "Express",
  "Python",
  "C",
];

const LeftAside = () => {
  const skillsLi = useMemo(
    () =>
      skills.map((el, index) => {
        return <div key={index}>{el}</div>;
      }),
    []
  );

  return (
    <div className={style.container_aside}>
      <div className={style.img_container}>
        <img src="myphoto2.png" />
      </div>
      <div className={style.name}>
        <h2>Vitaly</h2>
        <h2>Akhmetzyanov</h2>
      </div>
      <div className={style.media}>
        <img src="whatsapp.svg" />
        <img src="telegram.svg" />
        <img src="github.svg" />
      </div>
      <div className={style.skills_container}>
        <h2>Skills:</h2>
        <div className={style.skills}>{skillsLi}</div>
      </div>
    </div>
  );
};

export default LeftAside;
