import React from "react";
import styles from "./mobile_hr.module.scss";
import value1 from "../../../static/images/mobile/K-familyvalues-1@2x.png";
import value2 from "../../../static/images/mobile/K-familyvalues-2@2x.png";
import value3 from "../../../static/images/mobile/K-familyvalues-3@2x.png";
import value4 from "../../../static/images/mobile/K-familyvalues-4@2x.png";
import sectionTwoBgImg from "../../../static/images/mobile/img-hr-asain@2x.png";

export default function HrTalent() {
  return (
    <>
      <section className={styles.talentSectionOne}>
        <h2 className={styles.talentTitleBlack}>K-family values</h2>
        <div className={styles.familyListWrapper}>
          <div className={styles.familyColumn}>
            <div>
              <img src={value1} alt="value 1" className="img-fluid" />
            </div>
            <div className={styles.familyColumnTitle}>제품가치</div>
            <div className={styles.familyColumnDescription}>
              전통과 진정성이 더해져
              <br />
              만들어낸 맛의 가치
            </div>
          </div>
          <div className={styles.familyColumn}>
            <div>
              <img src={value2} alt="value 2" className="img-fluid" />
            </div>
            <div className={styles.familyColumnTitle}>접근가치</div>
            <div className={styles.familyColumnDescription}>
              고객과 가까이 함께하며
              <br />
              특별한 경험을 제공
            </div>
          </div>
          <div className={styles.familyColumn}>
            <div>
              <img src={value3} alt="value 3" className="img-fluid" />
            </div>
            <div className={styles.familyColumnTitle}>공간가치</div>
            <div className={styles.familyColumnDescription}>
              맛, 향, 소리, 따듯함으로
              <br />
              공간의 힐링을 전달
            </div>
          </div>
          <div className={styles.familyColumn}>
            <div>
              <img src={value4} alt="value 4" className="img-fluid" />
            </div>
            <div className={styles.familyColumnTitle}>참여가치</div>
            <div className={styles.familyColumnDescription}>
              고객과 항상 교감하여
              <br />
              즐겁고 행복한 경험을 제시
            </div>
          </div>
        </div>
      </section>
      <section className={styles.talentSectionTwo}>
        <div className={styles.talentRightPeopleWrapper}>
          <h2 className={styles.talentRightPeopleTitle}>
            Kalisco right people
          </h2>
          <div className={styles.talentRightPeopleDescription}>
            회사의 새로운 가치를 창출하기 위해 고민하고,
            <br />
            아이디어를 제안하며, 실행하는 열정적인 인재
          </div>
          <div className={styles.talentRightPeopleListWrapper}>
            <div className={styles.talentRightPeopleFlexWrapper}>
              <div className={styles.talentRightPeopleCircle}>겸손</div>
              <div className={styles.talentRightPeopleCircleDescription}>
                소통과 수용을 통해 신뢰를 형성하며
                <br />
                항상 겸허한 자세로
                <br />
                타인의 아이디어를 배우고
                <br />
                포용하는 자세
              </div>
            </div>
            <div className={styles.talentRightPeopleFlexWrapper}>
              <div className={styles.talentRightPeopleCircle}>책임</div>
              <div className={styles.talentRightPeopleCircleDescription}>
                자신의 R&R뿐만 아니라
                <br />
                다양한 분야에서 능력을 발휘하고,
                <br />
                민첩하고 자율적으로
                <br />
                책임감있게 임하는 자세
              </div>
            </div>
            <div className={styles.talentRightPeopleFlexWrapper}>
              <div className={styles.talentRightPeopleCircle}>리더십</div>
              <div className={styles.talentRightPeopleCircleDescription}>
                타인과의 소통을 통해
                <br />
                상대방의 입장을 이해하고 공감하며,
                <br />
                협력을 통해 도전적인 목표 달성을
                <br />
                위해 열정적으로 일하는 자세
              </div>
            </div>
          </div>
        </div>
        <div className={styles.talentRightPeopleBgImgWrapper}>
          <img src={sectionTwoBgImg} alt="background" className="img-fill" />
        </div>
      </section>
    </>
  );
}
