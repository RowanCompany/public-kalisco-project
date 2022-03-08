import React from "react";
import footerLogo from "../static/svg/logo-header-wh.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ flexGrow: 1, flexBasis: 0 }}
      >
        <div style={{ paddingRight: "3%" }}>
          <div className="d-flex">
            {/* <div style={{ paddingRight: "0.5rem" }}>
                            개인정보 처리방침
                        </div> */}
            {/* <div className="sitemap-text">Sitemap</div> */}
          </div>
          <div>서울시 강남구 역삼로 115 2층 (우)06243</div>
          <div style={{ paddingBottom: "30px" }}>
            사업자등록번호 211-88-32153 | 대표이사 장규형
          </div>
          <div>COPYRIGHT © 2020 KALISCO. ALL RIGHTS RESERVED.</div>
        </div>
        <div style={{ paddingRight: "5%" }}>
          <div>입점제안 및 가맹문의</div>
          <div>
            <a href="mailto:ilil.mun@kalisco.co.kr" className="sitemap-text">
              chulkyun.jung@kalisco.co.kr
            </a>
          </div>
        </div>
        <div style={{ paddingRight: "5%" }}>
          <div>Easy to cook(편의식) 상품구입 및 특판문의</div>
          <div>
            <a href="mailto:hanabe@kalisco.co.kr" className="sitemap-text">
              heonchan.kim@kalisco.co.kr
            </a>
          </div>
        </div>
        <div>
          <div>
            캘리스코 고객센터 : 1833-4550
            <br />
            (평일 09:00 ~ 18:00, 공휴일 휴무)
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
