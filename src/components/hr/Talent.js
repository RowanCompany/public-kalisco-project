import React from "react";
import styles from "./hr.module.scss";
import firstTitle from "../../static/images/k-family-values-text.png";
import KValuesImage1 from "../../static/images/K-familyvalues-1.png";
import KValuesImage2 from "../../static/images/K-familyvalues-2.png";
import KValuesImage3 from "../../static/images/K-familyvalues-3.png";
import KValuesImage4 from "../../static/images/K-familyvalues-4.png";

function Talent() {
    return (
        <>
            <section className={styles.talentFirstSection}>
                <div className="container">
                    <div className={styles.titleWrapper}>
                        <img src={firstTitle} alt="First title" />
                    </div>
                    <div className={styles.gridWrapper}>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage1} alt="k value first" />
                            </div>
                            <div>제품가치</div>
                            <div>
                                정통과 진정성이 더해져
                                <br />
                                만들어낸 맛의 가치
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage2} alt="k value second" />
                            </div>
                            <div>접근가치</div>
                            <div>
                                고객과 가까이 함께하며
                                <br />
                                특별한 경험을 제공
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage3} alt="k value third" />
                            </div>
                            <div>공간가치</div>
                            <div>
                                맛, 향, 소리, 따뜻함으로
                                <br />
                                공간의 힐링을 전달
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage4} alt="k value 4th" />
                            </div>
                            <div>참여가치</div>
                            <div>
                                고객과 항상 교감하여
                                <br />
                                즐겁고 행복한 경험을 제시
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>hi2</section>
        </>
    );
}

export default Talent;
