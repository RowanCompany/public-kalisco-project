import React, { useRef, useState } from "react";
import kaliscoLogo from "../../../static/svg/logo-header-or-m.svg";
import hamburgerMenuIcon from "../../../static/svg/icon-hammenu.svg";
import closeButtonIcon from "../../../static/svg/icon-closed.svg";
import styles from "./mobile_nav.module.scss";
import MobileNavData from "./MobileNavData";
import MobileNavList from "./MobileNavList";

export default function MobileNav() {
  const [menuOverlay, setMenuOverlay] = useState(false);
  const overlayNodeRef = useRef(null);

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
      {/* <Transition
        in={menuOverlay}
        timeout={500}
        nodeRef={overlayNodeRef}
        appear={true}
        unmountOnExit={true}
      >

      </Transition>*/}
      {menuOverlay && (
        <div
          className={`${styles.mobileNavOverlayWrapper} ${styles.active}`}
          ref={overlayNodeRef}
        >
          <div className={styles.overlayHeaderWrapper}>
            <div>
              <img src={kaliscoLogo} alt="kalisco logo" />
            </div>
            <div
              className={styles.overlayCloseButtonWrapper}
              onClick={() => setMenuOverlay(false)}
            >
              <img src={closeButtonIcon} alt="close button" />
            </div>
          </div>
          <div className={styles.mobileOverlayNavListWrapper}>
            <ul className={styles.mobileOverlayUL}>
              {/*<li className={styles.mobileOverlayLI}>
                <div>
                  <a href="#" className={styles.mobileOverlayAnchorTitle}>
                    About
                  </a>
                </div>
                <div>
                  <ul className={styles.mobileOverlaySubUL}>
                    <li className={styles.mobileOverlaySubLI}>
                      <a href="#" className={styles.mobileOverlaySubLink}>
                        연혁
                      </a>
                    </li>
                    <li className={styles.mobileOverlaySubLI}>
                      <a href="#" className={styles.mobileOverlaySubLink}>
                        사업소개
                      </a>
                    </li>
                  </ul>
                </div>
              </li>*/}
              {MobileNavData &&
                MobileNavData.map((d, i) => (
                  <MobileNavList
                    key={i}
                    title={d.title}
                    link={d.link}
                    subNav={d.subNav}
                  />
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
