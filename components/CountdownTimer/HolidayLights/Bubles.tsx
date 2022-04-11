import { useMemo, useEffect, useState } from "react";

interface bubleProps {
  bubleNum: number;
}

const Bubles = ({ bubleNum }: bubleProps) => {
  const [bubleStyles, setBubleStyles] = useState(
    [] as { left: number; top: number; size: number }[]
  );
  useEffect(() => {
    let res: { left: number; top: number; size: number }[] = [];
    for (let i = 0; i < bubleNum; i++) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 10;
      res.push({ left: x, top: y, size: 1 + size });
    }
    setBubleStyles(res);
  }, []);

  const bubles
  = 
//   useMemo(
//     () =>
      bubleStyles.map((el, index) => {
        return (
          <i
            style={{
              left: el.left + "px",
              top: el.top + "px",
              width: el.size + "px",
              height: el.size + "px",
            }}
            key={index}
          >
          </i>
        );
      })
//     [bubleNum]
//   );
//   console.log(bubles)
  return <>{bubles}</>;
};

export default Bubles;
