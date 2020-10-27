import React, { useEffect, useState } from "react";
import kaliscoLogo from "../../../static/svg/logo-header-or-m.svg";
import hamburgerMenuIcon from "../../../static/svg/icon-hammenu.svg";
import styles from "./mobile_nav.module.scss";

export default function MobileNav() {
  // TODO: WIP
  const [menuOverlay, setMenuOverlay] = useState(false);

  //useEffect(() => console.log(menuOverlay), [menuOverlay]);

  return (
    <>
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavListWrapper}>
          <li>
            <img src={kaliscoLogo} alt="kalisco logo" />
          </li>
          <li
            className={styles.hamburgerMenuWrapper}
            onClick={() => setMenuOverlay(true)}
          >
            <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
          </li>
        </ul>
      </nav>
    </>
  );
}
