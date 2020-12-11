import React, { useEffect } from "react";
import styles from "./register.module.scss";
import Nav from "../nav/Nav";
import Footer from "../Footer";
import axios from "axios";

export default function Register() {
  function handleCellPhoneAuthentication() {
    axios
      .post(
        "https://qlog2z6ai2.execute-api.ap-northeast-2.amazonaws.com/kalisco/v1/id/check/encode",
        {
          environment: "local",
          code: "1",
        }
      )
      .then((res) => {
        if (!res.data.errorMessage) {
          const data = JSON.parse(res.data);
          window.name = "parentForm";
          window.open(
            data.result,
            "childForm",
            "width=570, height=350, resizable = no, scrollbars = no"
          );
        } else {
          window.alert("본인인증 오류가 발생했습니다, 다시 시도해주세요.");
        }
      });
  }

  useEffect(() => {
    if (sessionStorage.getItem("tempRegisterCellphoneData")) {
      window.location.assign("/register/final");
    }
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const name = params.get("EncodeData");

    if (name) {
      if (window.opener) {
        window.opener.location.href = `//${window.location.host}/register?EncodeData=${name}`;
        window.close();
      } else {
        sessionStorage.setItem("tempRegisterCellphoneData", name);
        window.location.assign("/register/final");
      }
    }
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.registerBannerWrapper}>회원가입</div>
      <section className={styles.registerSection}>
        <div className={styles.registerBox}>
          {/*<div className={styles.registerButtonWrapper}>
            <button type="button" className={styles.registerNextButton}>
              휴대폰 인증하기
            </button>
          </div>*/}
          <div className={styles.contactAuthTitleBox}>본인인증</div>
          <div className={styles.contactAuthBoxDescription}>
            {/*아이핀 인증이나 휴대전화 인증 중 하나를 선택하여
          <br />
          본인확인을 진행해 주세요.*/}
            휴대전화 인증을 선택하여 본인확인을 진행해 주세요.
            <br />
            본인인증 시 제공되는 정보는 해당 인증기관에서 직접 수집하며,
            <br />
            나이스평가정보에서 인증 받은 휴대폰 번호를 사용하고 있습니다.
          </div>
          <div className={styles.contactAuthButtonWrapper}>
            <div>
              <button
                type="button"
                className={styles.contactAuthWhiteButton}
                onClick={handleCellPhoneAuthentication}
              >
                휴대전화 인증
              </button>
            </div>
            {/*<div>
            <button type="button">아이핀(I-PIN) 인증</button>
          </div>*/}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
