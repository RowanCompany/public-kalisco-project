import React from "react";
import styles from "./icon.module.scss";

export default function NoticeIcon({ hovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.881"
      height="28.275"
      viewBox="0 0 29.881 28.275"
    >
      {/*<defs>
        <style>.a{fill:#ffffff;}</style>
      </defs>*/}
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M122.839,290.664a.584.584,0,1,0-.8-.214A.584.584,0,0,0,122.839,290.664Zm0,0"
        transform="translate(-114.846 -272.676)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M5.6,43.068l2.939,5.091a2.334,2.334,0,1,0,4.043-2.334l-1.751-3.033,1.516-.875a.584.584,0,0,0,.214-.8L11.8,39.8l11.178-2.193A1.751,1.751,0,0,0,24.4,34.988l-1.94-3.359L23.7,29.752a.584.584,0,0,0,.018-.613l-1.167-2.022a.585.585,0,0,0-.541-.291l-2.245.135-2.153-3.73a1.736,1.736,0,0,0-1.494-.875H16.1a1.735,1.735,0,0,0-1.474.807L7,32.875,2.043,35.736A4.085,4.085,0,0,0,5.6,43.068Zm5.972,3.34a1.167,1.167,0,0,1-2.022,1.167L6.634,42.52l2.022-1.167ZM10.25,41.78l-.584-1.011,1.011-.584.584,1.011ZM21.722,28.012l.807,1.4L21.81,30.5l-1.39-2.408ZM15.6,23.8a.583.583,0,0,1,1,.012l6.788,11.758a.583.583,0,0,1-.491.875,2.142,2.142,0,0,0-.32.054L15.4,24.064C15.55,23.87,15.569,23.852,15.6,23.8Zm-.977,1.251,6.746,11.685-10.182,2-3.1-5.362ZM1.559,40.733a2.916,2.916,0,0,1,1.068-3.986l4.549-2.626,2.918,5.054L5.545,41.8A2.922,2.922,0,0,1,1.559,40.733Zm0,0"
        transform="translate(0 -21.051)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M46.377,309.865a.584.584,0,0,0-.8-.214l-1.011.584a.584.584,0,0,1-.8-.214.584.584,0,0,0-1.011.584,1.753,1.753,0,0,0,2.392.641l1.011-.584A.584.584,0,0,0,46.377,309.865Zm0,0"
        transform="translate(-40.191 -291.506)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M439.827,42.555l-3.252,1.81a.584.584,0,1,0,.568,1.02l3.252-1.81a.584.584,0,0,0-.567-1.02Zm0,0"
        transform="translate(-410.813 -40.002)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M443.053,137.246l-2.255-.6a.584.584,0,1,0-.3,1.127l2.255.6a.584.584,0,1,0,.3-1.127Zm0,0"
        transform="translate(-414.381 -128.648)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M384.117.433l-.6,2.255a.584.584,0,0,0,1.128.3l.6-2.255a.584.584,0,1,0-1.127-.3Zm0,0"
        transform="translate(-361.112 0)"
      />
    </svg>
  );
}
