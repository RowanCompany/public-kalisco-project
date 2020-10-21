import React from "react";
import brandImage from "../../static/images/brand.png";
import sabotonLogo from "../../static/svg/logo-saboten.svg";
import hibarinLogo from "../../static/svg/logo-hibarin.svg";
import tacobellLogo from "../../static/svg/logo-tacobell-2.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ModalProvider from "./modal/modal-provider";
import BrandModal from "./modal/BrandModal";
import CentralCircle from "./circle/CentralCircle";
//import BanjooCircle from "./circle/BanjooCircle";
import ReperkCircle from "./circle/ReperkCircle";

function BrandList() {
    return (
        <ModalProvider>
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
                        <CentralCircle />
                        <ReperkCircle />
                    </div>
                </div>
                <div className="wh-100">
                    <img src={brandImage} alt="brand bg" className="img-fill" />
                </div>
            </div>
            <Footer />
            <BrandModal />
        </ModalProvider>
    );
}

export default BrandList;
