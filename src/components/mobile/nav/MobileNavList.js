import React, { useState } from "react";
import styles from "./mobile_nav.module.scss";
import { Link } from "react-router-dom";

export default function MobileNavList(props) {
  const { title, link, subNav } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <li className={styles.mobileOverlayLI}>
      <div>
        <Link to={link} className={styles.mobileOverlayAnchorTitle}>
          {title}
        </Link>
      </div>
      {hovered && (
        <div>
          <ul className={styles.mobileOverlaySubUL}>
            {subNav &&
              subNav.map((d, i) => (
                <li className={styles.mobileOverlaySubLI} key={i}>
                  <a href={d.link} className={styles.mobileOverlaySubLink}>
                    {d.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </li>
  );
}
