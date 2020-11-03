import React, { useContext, useEffect, useMemo } from "react";
import { ModalContext } from "../modal/modal-context";
import reperkLogo from "../../../static/svg/logo-reperk.svg";
//import imgReperk from "../../../static/images/img_reperk_popup2.png";
import imgCentral from "../../../static/images/img_centralkc_popup.png";

function ReperkCircle({ parameter }) {
  const { setModalOpen } = useContext(ModalContext);
  const modalData = useMemo(() => {
    return {
      image: imgCentral,
      description: (
        <>
          <span style={{ color: "#E8390E" }}>더 센트럴 키친 by Kalisco</span>
          는
          <br />
          다이어티션(Dietician)과 셰프가 매주 새로운 메뉴를 제안합니다.
          <br />
          <br />
          편안한 공간에서 식사부터 디저트까지 빠르고 편리하게 –
          <br />
          즐거운 맛의 신세계로 여러분을 초대합니다.
        </>
      ),
    };
  }, []);
  const conditionalModalOpen = () => {
    if (parameter === "reperk") {
      setModalOpen(modalData);
    }
  };
  useEffect(conditionalModalOpen, [modalData, parameter, setModalOpen]);

  return (
    <div
      className="brand-circle-wrapper reperk animate__animated animate__rotateIn"
      onClick={() => setModalOpen(modalData)}
    >
      <div className="brand-logo-wrapper">
        <img src={reperkLogo} alt="reperk logo" style={{ maxWidth: "118px" }} />
      </div>
      <div className="brand-title">리퍼크</div>
    </div>
  );
}

export default ReperkCircle;
