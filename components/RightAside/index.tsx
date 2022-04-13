import style from "./rightAside.module.css";

const RightAside = () => {
  return (
    <div className={style.rightside_container}>
      <a className={style.link_svg}>
        <svg fill="none">
          <path
            d="M14.11 6.6l-.16-.09c-.042.343-.13.68-.26 1A3 3 0 0115 10a3 3 0 01-3 3H8a3 3 0 010-6h.82A3 3 0 009 6H8a4 4 0 000 8h4a4 4 0 002.11-7.4z"
            fill="currentColor"
          ></path>
          <path
            d="M1.89 9.4l.16.09c.042-.343.13-.68.26-1A3 3 0 011 6a3 3 0 013-3h4a3 3 0 110 6h-.82A3 3 0 007 10h1a4 4 0 000-8H4a4 4 0 00-2.11 7.4z"
            fill="currentColor"
          ></path>
        </svg>
        Copy link
      </a>
      <div className={style.left_border}>
      <div className={style.content_container}>
        <svg
          className={style.content_svg}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M21 10H7M21 6H3M21 14H3M21 18H7"></path>
        </svg>
        CONTENTS
      </div>
      <div className={style.aside_list}>
        <div><a>Todo</a></div>
        <div><a>Counter</a></div>
        <div><a>Lololo</a></div>
        <div><a>Second</a></div>
      </div>
      </div>
    </div>
  );
};

export default RightAside;
