import React from "react";
import footerLogo from "../static/svg/logo-header-wh.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo-wrapper">
                <img src={footerLogo} alt="footer logo" />
            </div>
            <div style={{ paddingRight: "3%" }}>
                <div className="d-flex">
                    <div style={{ paddingRight: "0.5rem" }}>
                        개인정보 처리방침
                    </div>
                    <div className="sitemap-text">Sitemap</div>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                    서울특별시 강남구 강남대로 382 아워홈빌딩 2층 (우) 06232
                </div>
                <div>COPYRIGHT © 2019 KALISCO. ALL RIGHTS RESERVED.</div>
            </div>
            <div style={{ paddingRight: "5%" }}>
                <div>입점제안 및 가맹문의</div>
                <div>llimun@kalisco.co.kr</div>
            </div>
            <div style={{ paddingRight: "5%" }}>
                <div>Easy to cook(편의식) 상품구입 및 특판문의</div>
                <div>kipal.cha@kalisco.co.kr</div>
            </div>
            <div>
                <div>
                    캘리스코 고객센터 : 070-4846-8215
                    <br />
                    (평일 09:00 ~ 18시, 공휴일 휴무)
                </div>
            </div>
        </footer>
    );
}

export default Footer;
