import React, { useRef, useState } from "react";
import kaliscoLogo from "../../../static/svg/logo-header-or-m.svg";
import hamburgerMenuIcon from "../../../static/svg/icon-hammenu.svg";
import closeButtonIcon from "../../../static/svg/icon-closed.svg";
import styles from "./mobile_nav.module.scss";
import MobileNavData from "./MobileNavData";
import MobileNavList from "./MobileNavList";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../../utils/server";

export default function MobileNav() {
  const [menuOverlay, setMenuOverlay] = useState(false);
  const overlayNodeRef = useRef(null);

  function handleSignOut(e) {
    e.preventDefault();
    const authToken = window.localStorage.getItem("userAuthToken");

    axios
      .delete(`${url}/user/signout`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        const status = res.data.status;
        if (status === "OK") {
          window.localStorage.removeItem("userAuthToken");
          window.location.assign("/");
        } else {
          return Promise().reject("Not validated");
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <nav className={styles.mobileNav}>
        <ul className={styles.mobileNavListWrapper}>
          <li>
            <Link to="/">
              <img src={kaliscoLogo} alt="kalisco logo" />
            </Link>
          </li>
          <li
            className={styles.hamburgerMenuWrapper}
            onClick={() => setMenuOverlay(true)}
          >
            <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
          </li>
        </ul>
      </nav>
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
          <div className={styles.mobileOverlayFooter}>
            <div>
              {window.localStorage.getItem("userAuthToken") ? (
                <span
                  className={styles.mobileOverlayFooterLink}
                  onClick={handleSignOut}
                >
                  ????????????
                </span>
              ) : (
                <Link to="/login" className={styles.mobileOverlayFooterLink}>
                  ?????????
                </Link>
              )}
              <Link to="/contact" className={styles.mobileOverlayFooterLink}>
                ????????????
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
