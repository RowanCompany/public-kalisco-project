import React from "react";
import styles from "./icon.module.scss";

export default function EventIcon({ hovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.729"
      height="28.081"
      viewBox="0 0 25.729 28.081"
    >
      {/*<defs>
        <style>.a{fill:#fff;}</style>
      </defs>*/}
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M44.014,304.244A.47.47,0,0,0,43.6,304a5.966,5.966,0,0,0-4.845,2.493l-.623.871L34.119,308.7h-.2l3.43-3.43a.47.47,0,0,0-.333-.8H35.972a8.111,8.111,0,0,0-5.734,2.352H27.7a5.184,5.184,0,0,0-3.69,1.528l-5.664,5.664.665.665,5.664-5.664a4.249,4.249,0,0,1,3.024-1.253h2.737a.47.47,0,0,0,.333-.138l.1-.1a7.177,7.177,0,0,1,5.018-2.116l-4.37,4.37.665.665.8-.8H34.2a.472.472,0,0,0,.149-.024l4.233-1.411a.471.471,0,0,0,.234-.173l.711-1a5.024,5.024,0,0,1,3.169-2.016l-2.7,4.244L33.629,312H27.141a.47.47,0,0,0-.333.138l-2.352,2.352.665.665,2.214-2.214h6.39a.47.47,0,0,0,.185-.038l6.584-2.822a.47.47,0,0,0,.211-.18L44,304.723A.47.47,0,0,0,44.014,304.244Z"
        transform="translate(-18.343 -287.069)"
      />
      <path
        className={!!hovered ? styles.activeIcon : styles.normalIcon}
        d="M112.47,22.114h.47V34.342a.47.47,0,0,0,.47.47h5.173v-.941h-4.7V22.114h5.173V33.4H120V22.114h.941V32.931h.941V22.114h5.173V33.4h.941V22.114h.47a.47.47,0,0,0,.47-.47V19.762a.47.47,0,0,0-.47-.47h-2.239A2.115,2.115,0,0,0,124.463,16a3.519,3.519,0,0,0-2.641,1.193.47.47,0,0,0-.416-.252h-1.881a.47.47,0,0,0-.416.252A3.519,3.519,0,0,0,116.468,16a2.115,2.115,0,0,0-1.759,3.292H112.47a.47.47,0,0,0-.47.47v1.881a.47.47,0,0,0,.47.47Zm8.936-1.881v.941h-1.881v-.941Zm6.584.941h-5.644v-.941h5.644Zm-3.527-4.233a1.176,1.176,0,0,1,0,2.352h-2.576A2.59,2.59,0,0,1,124.463,16.941Zm-3.527.941v1.411H120V17.881Zm-5.644.235a1.177,1.177,0,0,1,1.176-1.176,2.59,2.59,0,0,1,2.576,2.352h-2.576A1.177,1.177,0,0,1,115.292,18.116Zm-2.352,2.116h5.644v.941h-5.644Z"
        transform="translate(-106.494 -16)"
      />
    </svg>
  );
}
