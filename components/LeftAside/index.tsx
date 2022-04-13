import style from "./leftAside.module.css";

const LeftAside = () => {
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
              <img src='whatsapp.svg'/>
              <img src="telegram.svg" />
              <img src="github.svg" />
      </div>
    </div>
  );
};

export default LeftAside;
