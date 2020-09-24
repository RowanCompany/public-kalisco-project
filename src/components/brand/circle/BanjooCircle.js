import React, { useContext } from "react";
import { ModalContext } from "../modal/modal-context";
import banjooLogo from "../../../static/images/logo-banjoo.png";
import imgBanjoo from "../../../static/images/img_banjoo_popup.png";

function BanjooCircle() {
    const { setModalOpen } = useContext(ModalContext);
    return (
        <div
            className="brand-circle-wrapper banjoo animate__animated animate__rotateIn"
            onClick={() =>
                setModalOpen({
                    image: imgBanjoo,
                    description: (
                        <>
                            <span style={{ color: "#E8390E" }}>Banjoo</span>는
                            모던 코리안 다이닝으로
                            <br />
                            한식을 현대적으로 해석한 외식 브랜드입니다.
                            <br />
                            <br />
                            세계인과 어우러져 즐기는 모던한 한식 요리를
                            만나보세요!
                        </>
                    ),
                })
            }
        >
            <div className="brand-logo-wrapper">
                <img src={banjooLogo} alt="banjoo logo" />
            </div>
            <div className="brand-title">반주</div>
        </div>
    );
}

export default BanjooCircle;
