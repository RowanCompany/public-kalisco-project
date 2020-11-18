import React, { useContext, useEffect, useMemo } from "react";
import { ModalContext } from "../modal/modal-context";
import reperkLogo from "../../../static/svg/logo-reperk.svg";
import imgReperk from "../../../static/images/img_reperk_popup2_02.png";
//import imgReperk from "../../../static/images/img_reperk_popup2.png";
//import imgCentral from "../../../static/images/img_centralkc_popup.png";

function ReperkCircle({ parameter }) {
  const { setModalOpen } = useContext(ModalContext);
  const modalData = useMemo(() => {
    return {
      image: imgReperk,
      description: (
        <>
          <span style={{ color: "#E8390E" }}>For the spirit.</span>
          <br />
          <br />
          <br />
          프로들의 영감이 시작되는 공간 리퍼크에서
          <br />
          격이 다른 에스프레소와 디저트를 즐기세요.
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
