import React, { useState } from "react";
import styles from "./mobile_main_circle.module.scss";
import { Link } from "react-router-dom";

export default function MobileMainCircle({ Logo, link, text }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={link}
      className={styles.lastSlideCircle}
      onClick={() => setHovered(true)}
    >
      <Logo hovered={hovered} />
      <div>{text}</div>
    </Link>
  );
}
