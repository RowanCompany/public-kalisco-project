import React, { useContext, useEffect, useMemo } from "react";
import { ModalContext } from "../modal/modal-context";
import centralkcLogo from "../../../static/svg/logo-centralkc.svg";
import imgCentral from "../../../static/images/img_centralkc_popup.png";

function CentralCircle({ parameter }) {
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
  const handleModalOpen = () => setModalOpen(modalData);
  const conditionalModalOpen = () => {
    if (parameter === "centralkitchen") {
      setModalOpen(modalData);
    }
  };
  useEffect(conditionalModalOpen, [modalData, parameter, setModalOpen]);

  return (
    <div
      className="brand-circle-wrapper centralkc animate__animated animate__rotateIn"
      onClick={handleModalOpen}
    >
      <div className="brand-logo-wrapper">
        <img src={centralkcLogo} alt="central kitchen logo" />
      </div>
      <div className="brand-title">센트럴키친</div>
    </div>
  );
}

export default CentralCircle;
