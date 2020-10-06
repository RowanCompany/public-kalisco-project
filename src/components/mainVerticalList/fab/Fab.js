import React from "react";
import styles from "./fab.module.scss";
import iconSupport from "../../../static/svg/fab_support.svg";
import { Link } from "react-router-dom";
import topButtonIcon from "../../../static/svg/btn-top.svg";

function Fab({ isFirst, clickEvent }) {
  return (
    <div className={styles.fabWrapper}>
      <Link to="/contact" className="d-inline-block">
        <div className={styles.supportIcon}>
          <img src={iconSupport} alt="support" />
        </div>
      </Link>
      {!isFirst && (
        <div
          className={`${styles.topButton} animate__fadeIn animate__animated`}
          onClick={clickEvent}
        >
          <img src={topButtonIcon} alt="click to top" />
        </div>
      )}
    </div>
  );
}

export default Fab;
