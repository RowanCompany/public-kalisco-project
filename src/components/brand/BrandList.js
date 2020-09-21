import React from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
import brandImage from "../../static/images/brand.png";
import sabotonLogo from "../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../static/svg/logo-hibarin.svg";
import tacobellLogo from "../../static/svg/logo-tacobell-2.svg";
import centralkcLogo from "../../static/svg/logo-centralkc.svg";
import banjooLogo from "../../static/images/logo-banjoo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function BrandList() {
    return (
        <>
            <div className="viewport-wrapper">
                <div className="main-bg-wrapper">
                    <div className="brand-list-wrapper">
                        <Link
                            className="d-inline-block brand-circle-wrapper saboten animate__animated animate__rotateIn"
                            to="/brand/saboten/story"
                        >
                            <div className="brand-logo-wrapper">
                                <img src={sabotonLogo} alt="saboten logo" />
                            </div>
                            <div className="brand-title">사보텐</div>
                        </Link>
                        <Link
                            className="d-inline-block brand-circle-wrapper hibarin animate__animated animate__rotateIn"
                            to="/brand/hibarin/story"
                        >
                            <div className="brand-logo-wrapper">
                                <img src={hibarinLogo} alt="hibarin logo" />
                            </div>
                            <div className="brand-title">히바린</div>
                        </Link>
                        <a
                            className="d-inline-block brand-circle-wrapper tacobell animate__animated animate__rotateIn"
                            href="http://koreatacobell.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className="brand-logo-wrapper">
                                <img src={tacobellLogo} alt="taco bell logo" />
                            </div>
                            <div className="brand-title">타코벨</div>
                        </a>
                        <div
                            className="brand-circle-wrapper centralkc animate__animated animate__rotateIn"
                            onClick={() => window.alert("준비중입니다.")}
                        >
                            <div className="brand-logo-wrapper">
                                <img
                                    src={centralkcLogo}
                                    alt="central kitchen logo"
                                />
                            </div>
                            <div className="brand-title">센트럴키친</div>
                        </div>
                        <div
                            className="brand-circle-wrapper banjoo animate__animated animate__rotateIn"
                            onClick={() => window.alert("준비중입니다.")}
                        >
                            <div className="brand-logo-wrapper">
                                <img src={banjooLogo} alt="banjoo logo" />
                            </div>
                            <div className="brand-title">반주</div>
                        </div>
                    </div>
                </div>
                <div className="wh-100">
                    <img src={brandImage} alt="brand bg" className="img-fill" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BrandList;
