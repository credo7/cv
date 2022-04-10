import { useMemo } from "react";
import style from "./holiday.module.css";

interface holidayProps {
  lightsNum: number;
}

const HolidayLights = ({ lightsNum }: holidayProps) => {
  const lights = useMemo(
    () =>
      new Array(lightsNum).fill(1).map((_, index) => {
        return <li key={index}></li>;
      }),
    [lightsNum]
  );
  return <ul className={style.strand}>{lights}</ul>;
};

export default HolidayLights;
