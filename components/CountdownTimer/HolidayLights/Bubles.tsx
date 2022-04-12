import { useMemo } from "react";

interface bubleProps {
  bubleNum: number;
}

const Bubles = ({ bubleNum }: bubleProps) => {

    let res: { left: number; top: number; size: number }[] = [];
    for (let i = 0; i < bubleNum; i++) {
      let x = Math.floor(Math.random() * 810);
      let y = Math.floor(Math.random() * 500);
      let size = Math.random() * 10;
      res.push({ left: x, top: y, size: 1 + size });
    }

  const bubles =
      useMemo(
        () =>
    res.map((el, index) => {
      return (
        <i
          style={{
            position: "absolute",
            left: el.left + "px",
            top: el.top + "px",
            width: el.size + "px",
            height: el.size + "px",
          }}
          key={index}
        ></i>
      );
    }),
      [bubleNum]
    );
  //   console.log(bubles)
  return <>{bubles}</>;
};

export default Bubles;
