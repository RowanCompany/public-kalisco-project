import React from "react";
import styles from "./mobile_hr.module.scss";

export default function HrWelfare() {
  return (
    <section className={styles.welfareSection}>
      <h2 className={styles.welfareTitle}>인사제도</h2>
      <p className={styles.welfareDescription}>임직원을 위한 복지정책</p>
      <div className={styles.welfareBox}>
        <div className={styles.welfareRedDot} />
        <h3 className={styles.welfareBoxTitle}>Benefit</h3>
        <div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>급여</div>
            <div className={styles.welfareBoxDescription}>
              개인별 성과기반 연봉제 운영
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>인센티브</div>
            <div className={styles.welfareBoxDescription}>
              실적 기반 성과급 지급
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>법정제수당</div>
            <div className={styles.welfareBoxDescription}>
              연장, 휴일, 법정수당 적용
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>진급제도</div>
            <div className={styles.welfareBoxDescription}>
              정기승진급, 발탁진급
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>포상제도</div>
            <div className={styles.welfareBoxDescription}>
              우수매장포상,우수사원포상,
              <br />
              즉포상,장기근속상
            </div>
          </div>
        </div>
      </div>
      <div className={styles.welfareBox}>
        <div className={styles.welfareRedDot} />
        <h3 className={styles.welfareBoxTitle}>Welfare</h3>
        <div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>경조사</div>
            <div className={styles.welfareBoxDescription}>
              경조금 및 경조휴가 지급
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>건강검진</div>
            <div className={styles.welfareBoxDescription}>
              법정검진 외 의료비 보조
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>선물지급</div>
            <div className={styles.welfareBoxDescription}>
              명절 또는 기념일 선물 지급
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>직원할인</div>
            <div className={styles.welfareBoxDescription}>
              자사매장 20% 할인
            </div>
          </div>
          <div className={styles.welfareBoxFlexWrapper}>
            <div className={styles.welfareBoxRoundTitle}>기타지원</div>
            <div className={styles.welfareBoxDescription}>
              개별 법인카드 지급, 중식,
              <br />
              야간 교통비, 교육비 제공
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
