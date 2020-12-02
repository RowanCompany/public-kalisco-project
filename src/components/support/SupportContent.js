import React from "react";
import styles from "./support.module.scss";
import SupportMainImage from "../../static/images/support-img-mar-Support.png";
import SupportTextImage from "../../static/images/support-text.png";
import SupportPanelList from "./panels/SupportPanelList";

function SupportContent() {
  return (
    <div className="position-relative" style={{ height: "100vh" }}>
      <div className={styles.supportListWrapper}>
        <div className={styles.supportTextWrapper}>
          <img src={SupportTextImage} alt="Support text" />
        </div>
        <SupportPanelList />
      </div>
      <div style={{ height: "100%" }}>
        <img src={SupportMainImage} alt="Support main" className="img-fill" />
      </div>
    </div>
  );
}

export default SupportContent;
