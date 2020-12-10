import React, { useEffect } from "react";
import axios from "axios";

import styles from "./mobile_contact.module.scss";

export default function ContactAuth() {
  function handleCellPhoneAuthentication() {
    axios
      .post(
        "https://qlog2z6ai2.execute-api.ap-northeast-2.amazonaws.com/kalisco/v1/id/check/encode",
        {
          environment: "server",
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
    if (sessionStorage.getItem("tempAuthData")) {
      window.location.assign("/mail");
    }

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const name = params.get("EncodeData");

    if (name) {
      if (window.opener) {
        window.opener.location.href = `//${window.location.host}/contact?EncodeData=${name}`;
        window.close();
      } else {
        sessionStorage.setItem("tempAuthData", name);
        window.location.assign("/mail");
      }
    }
  }, []);

  return (
    <>
      <section className={styles.contactAuthSection}>
        <div className={styles.contectAuthWrapper}>
          <div className={styles.contactAuthTitle}>고객의 소리</div>
          <div className={styles.contactAuthSub}>
            문의사항에 대한 답변은 입력하신 이메일 주소로 보내드립니다. 항상
            고객의 목소리에 귀 기울이는 캘리스코가 되겠습니다.
          </div>
          <div className={styles.contactAuthDesc}>
            회원 로그인 또는 비회원 실명인증 하시면 문의 등록이 가능합니다.
          </div>
          <div className={styles.contactAuthDesc}>
            본인인증 시 제공되는 정보는 해당 인증기관에서 직접 수집하며, 인증
            이외의 용도로 이용 또는 저장되지 않습니다.
          </div>
          <div className={styles.contactAuthConfirmTitle}>
            <div className={styles.contactAuthConfirmTitleText}>
              비회원 실명 인증
            </div>
          </div>
          <div className={styles.contactAuthConfirmDesc}>
            아이핀 인증이나 휴대전화 인증 중<br />
            하나를 선택하여
            <br />
            본인확인을 진행해 주세요.
          </div>
          <button
            type="button"
            className={styles.contactAuthConfirmButton}
            onClick={handleCellPhoneAuthentication}
          >
            휴대전화 인증
          </button>
        </div>
      </section>
    </>
  );
}
