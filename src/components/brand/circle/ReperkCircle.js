import React, { useContext } from "react";
import { ModalContext } from "../modal/modal-context";
import reperkLogo from "../../../static/svg/logo-reperk.svg";
import imgReperk from "../../../static/images/img_reperk_popup2.png";

function ReperkCircle() {
    const { setModalOpen } = useContext(ModalContext);
    return (
        <div
            className="brand-circle-wrapper reperk animate__animated animate__rotateIn"
            onClick={() =>
                setModalOpen({
                    image: imgReperk,
                    description: (
                        <>
                            {/*<span style={{ color: "#E8390E" }}>Banjoo</span>는
                            모던 코리안 다이닝으로
                            <br />
                            한식을 현대적으로 해석한 외식 브랜드입니다.
                            <br />
                            <br />
                            세계인과 어우러져 즐기는 모던한 한식 요리를
                            만나보세요!*/}
                            <div style={{ color: "#E8390E", textAlign: "center" }}>For the spirit.</div>
                            <br/><br/>
                            프로들의 영감이 시작되는 공간 리퍼크에서
                            <br/>
                            격이 다른 에스프레소와 디저트를 즐기세요.
                        </>
                    ),
                })
            }
        >
            <div className="brand-logo-wrapper">
                <img src={reperkLogo} alt="reperk logo" style={{maxWidth: "118px"}} />
            </div>
            <div className="brand-title">리퍼크</div>
        </div>
    );
}

export default ReperkCircle;
