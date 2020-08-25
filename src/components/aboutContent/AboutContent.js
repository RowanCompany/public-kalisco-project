import React from "react";
import styles from "./about_content.module.scss";
import marStoneImage from "../../static/images/img-mar-stone.png";
import aboutFirstImage from "../../static/images/about-2.png";
import aboutSecondImage from "../../static/images/about-1.png";

function AboutContent() {
    return (
        <>
            <div className="position-relative">
                <div className={styles.aboutTextWrapper}>
                    <h1 className={styles.aboutTextTitle}>
                        <span className={styles.emphasis}>캘리스코</span>에 오신
                        것을 환영합니다
                    </h1>
                    <p className={styles.aboutTextParagraph}>
                        <span className={styles.emphasis}>캘리스코</span>는
                        2001년 사보텐 오픈을 시작으로 현재까지 다양한 사업을
                        진행하고 있습니다.
                    </p>
                </div>
                <div>
                    <img
                        src={marStoneImage}
                        alt="Mar Stone"
                        className="img-fill"
                    />
                </div>
            </div>
            <div className={styles.gridWrapper}>
                <div className={styles.gridColumn}>
                    <div className={styles.gridBackgroundWrapper}>
                        <div className={styles.gridText}>기업 연혁</div>
                    </div>
                    <div>
                        <img
                            src={aboutFirstImage}
                            alt="about first"
                            className="img-fill"
                        />
                    </div>
                </div>
                <div className={styles.gridColumn}>
                    <div className={styles.gridBackgroundWrapper}>
                        <div className={styles.gridText}>사업 소개</div>
                    </div>
                    <div>
                        <img
                            src={aboutSecondImage}
                            alt="about second"
                            className="img-fill"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutContent;
