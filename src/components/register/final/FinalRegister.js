import React, { useEffect } from "react";
import Nav from "../../nav/Nav";
import Footer from "../../Footer";
import styles from "../register.module.scss";
import axios from "axios";

export default function FinalRegister() {
  useEffect(() => {
    const authData = sessionStorage.getItem("tempRegisterCellphoneData");
    if (!authData) {
      window.location.assign("/agreement");
    }
    axios
      .post(
        "https://qlog2z6ai2.execute-api.ap-northeast-2.amazonaws.com/kalisco/v1/id/check/decode",
        {
          encodingData: authData,
        }
      )
      .then((res) => {
        const data = JSON.parse(res.data);
        const sName = data["sName"];
        if (!sName) {
          sessionStorage.removeItem("tempRegisterCellphoneData");
          window.location.assign("/agreement");
        } else {
          console.log(data);
        }
      });
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.registerBannerWrapper}>회원가입 양식 작성</div>
      <section className={styles.registerSection}>
        <div className={styles.registerBox}>
          <div className={styles.requireText}>
            <span>
              <b>*</b> 필수
            </span>
            &nbsp;입력항목
          </div>
          <div className={styles.registerFormWrapper}>
            <div>아이디</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>이름</div>
          <div>이메일</div>
          <div>비밀번호</div>
          <div>전화번호</div>
          <div>핸드폰번호</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
