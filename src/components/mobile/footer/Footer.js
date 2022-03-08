import React from "react";
import styles from "./mobile_footer.module.scss";
import kaliscoWhiteLogo from "../../../static/svg/mobile/logo-header-wh-m.svg";

export default function Footer() {
  return (
    <footer className={styles.mobileFooterBackgroundWrapper}>
      <div>
        <img src={kaliscoWhiteLogo} alt="kalisco logo" />
      </div>
      <div>
        <div>서울시 강남구 역삼로 115 2층 (우)06243</div>
        <div>사업자등록번호 211-88-32153 | 대표이사 장규형</div>
      </div>
      <div>
        <div className={styles.mobileFooterEmailWrapper}>
          <div className={styles.mobileFooterEmailFlexWrapper}>
            <div>입점제안 및 가맹문의</div>
            <div>
              <a
                href="mailto:ilil.mun@kalisco.co.kr"
                className={styles.mobileFooterEmailLink}
              >
                chulkyun.jung@kalisco.co.kr
              </a>
            </div>
          </div>
          <div className={styles.mobileFooterEmailFlexWrapper}>
            <div>Easy to cook(편의식) 상품구입 및 특판문의</div>
            <div>
              <a
                href="mailto:hanabe@kalisco.co.kr"
                className={styles.mobileFooterEmailLink}
              >
                heonchan.kim@kalisco.co.kr
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>캘리스코 고객센터 : 1833-4550</div>
        <div>(평일 09:00 ~ 18:00, 공휴일 휴무)</div>
      </div>
      <div>COPYRIGHT © 2020 KALISCO. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}
