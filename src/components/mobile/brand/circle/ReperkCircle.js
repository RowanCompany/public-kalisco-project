import React, { useContext, useEffect, useMemo } from "react";
import { ModalContext } from "../../../brand/modal/modal-context";
import reperkLogo from "../../../../static/svg/logo-reperk.svg";
import imgReperk from "../../../../static/images/img_reperk_popup2_02.png";
import styles from "../mobile_brand.module.scss";

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
      className={`${styles.brandCircle} ${styles.reperk} animate__animated animate__rotateIn`}
      onClick={() => setModalOpen(modalData)}
    >
      <div className={styles.brandCircleContent}>
        <div className={styles.brandCircleLogoWrapper}>
          <img src={reperkLogo} alt="reperk" className="wh-100" />
        </div>
        <div className={styles.brandCircleDescription}>리퍼크</div>
      </div>
    </div>
  );
}

export default ReperkCircle;
