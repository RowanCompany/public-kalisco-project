import React, { useState } from "react";
import styles from "./mobile_main_circle.module.scss";
import { Link } from "react-router-dom";

export default function MobileMainCircle({ Logo, link, text }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={link}
      className={`${styles.lastSlideCircle} ${!!hovered && styles.active}`}
      onClick={() => setHovered(true)}
    >
      <div className={styles.lastSlideCircleElementWrapper}>
        <Logo hovered={hovered} />
        <div className={styles.lastSlideCircleText}>{text}</div>
      </div>
    </Link>
  );
}
