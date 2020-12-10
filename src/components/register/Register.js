import React, { useEffect } from "react";
import styles from "./register.module.scss";
import Nav from "../nav/Nav";
import Footer from "../Footer";
import axios from "axios";
//import { CRM_URL } from "../../utils/server";
//import "whatwg-fetch";

export default function Register() {
  /*useEffect(() => {
    const dateObject = new Date();
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const CRM_API_KEY = year * month * day + (year + month + day);
    const CRM_OBJECT = {
      ID: "ghtest123422223323",
      NAME: "테스트",
      PASS: "1234",
      TEL_NO: "021231234",
      HP_NO: "01012341234",
      EMAIL: "ghtest1234@test.com",
      USERCI:
        "MC0GCCqGSIb3DQIJAyEAPaDm2E1L7S0jJFIb/0WHzWwrqbhcokSrwC4p96salwM=",
      INTEGRATED_YN: "N",
      USE_TERMS_YN: "N",
      PRIVACY_YN: "N",
      MARKETING_YN: "N",
      ADVERTISING_YN: "N",
      POINT_YN: "N",
      THIRD_PARTY_YN: "N",
      HP_YN: "N",
      SMS_YN: "N",
      EMAIL_YN: "N",
      BIRTHDAY: "20000101",
      SEX: "1",
      SYSTEM_GBN: "A1_MEMBER",
    };

    const CRM_PARAMS = new URLSearchParams();
    CRM_PARAMS.append("GUBUN", "MEMBER_REGISTER");
    CRM_PARAMS.append("ISJSONPARA", "Y");
    CRM_PARAMS.append("KEY", CRM_API_KEY);
    window
      .fetch(`${CRM_URL}/Homepage?${CRM_PARAMS.toString()}`, {
        method: "POST",
        headers: {
          Accept: "*!/!*",
          "Content-Type": "application/json",
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
        },
        referrer: "",
        cache: "no-cache",
        body: JSON.stringify(CRM_OBJECT),
      })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => err);
  }, []);*/
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
