import style from "./leftAside.module.css";

const LeftAside = () => {
  return (
    <div className={style.container_aside}>
      <ul>
        <li className={style.active}>
          <a href="#">README</a>
        </li>
        <li><a href="#">ToDo</a></li>
        <li><a href="#">Counter</a></li>
        <li>Lololo</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  );
};

export default LeftAside;
