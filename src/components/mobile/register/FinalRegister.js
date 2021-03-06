import React, { useEffect, useRef, useState } from "react";
import styles from "./register.module.scss";
import { CRM_URL } from "../../../utils/server";
import axios from "axios";

export default function FinalRegister() {
  const formRef = useRef(null);
  const cellphoneDataRef = useRef(null);
  const [cellphoneNumber, setCellphoneNumber] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("1");
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const CRM_API_KEY = year * month * day + (year + month + day);

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
          const CRM_PARAMS = new URLSearchParams();
          CRM_PARAMS.append("GUBUN", "ID_SEARCH");
          CRM_PARAMS.append("ISJSONPARA", "Y");
          CRM_PARAMS.append("KEY", CRM_API_KEY.toString());

          window
            .fetch(`${CRM_URL}/Homepage?${CRM_PARAMS.toString()}`, {
              method: "POST",
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Connection: "keep-alive",
                "Accept-Encoding": "gzip, deflate, br",
              },
              referrer: "",
              cache: "no-cache",
              body: JSON.stringify({
                USERCI: data["sDupInfo"],
              }),
            })
            .then((res) => {
              return res.json();
            })
            .then((response) => {
              const resultLength = response.list ? response.list.length : 0;
              if (resultLength > 0) {
                window.alert("?????? ????????? ????????? ????????? ????????????!");
                window.location.assign("/login");
              }
            })
            .catch((err) =>
              window.alert("??????????????? ??????????????????, ?????? ??????????????????!")
            );

          cellphoneDataRef.current = data;
          setCellphoneNumber(data["sMobileNo"]);
          setName(sName);
          setGender(data["sGender"]);
        }
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const agreementData = JSON.parse(
      window.localStorage.getItem("tempAgreementData")
    );
    const data = new FormData(formRef.current);
    const totalData = {
      ...agreementData,
      USERCI: cellphoneDataRef.current.sDupInfo,
      BIRTHDAY: cellphoneDataRef.current.sBirthDate,
    };
    data.forEach((d, i) => (totalData[i] = d));
    const CRM_PARAMS = new URLSearchParams();
    CRM_PARAMS.append("GUBUN", "MEMBER_REGISTER");
    CRM_PARAMS.append("ISJSONPARA", "Y");
    CRM_PARAMS.append("KEY", CRM_API_KEY.toString());
    window
      .fetch(`${CRM_URL}/Homepage?${CRM_PARAMS.toString()}`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
        },
        referrer: "",
        cache: "no-cache",
        body: JSON.stringify(totalData),
      })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (Number(response.return) === 1) {
          window.alert("??????????????? ?????????????????????!");
          window.localStorage.removeItem("tempAgreementData");
          window.sessionStorage.removeItem("tempRegisterCellphoneData");
          window.location.assign("/");
        } else {
          window.alert("??????????????? ??????????????????, ?????? ??????????????????!");
          return false;
        }
      })
      .catch((err) =>
        window.alert("??????????????? ??????????????????, ?????? ??????????????????!")
      );
  }

  return (
    <>
      <div className={styles.registerBannerWrapper}>???????????? ?????? ??????</div>
      <section className={styles.registerSection}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.registerBox}>
            <div className={styles.requireText}>
              <span>
                <b>*</b> ??????
              </span>
              &nbsp;????????????
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="id" className={styles.registerFormLabel}>
                ?????????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="text"
                  name="ID"
                  id="id"
                  className={styles.registerCommonInput}
                  required
                />
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="password" className={styles.registerFormLabel}>
                ????????????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="password"
                  name="PASS"
                  id="password"
                  required
                  className={styles.registerCommonInput}
                />
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="name" className={styles.registerFormLabel}>
                ??????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="text"
                  name="NAME"
                  id="name"
                  required
                  readOnly
                  value={name}
                  className={styles.registerCommonInput}
                />
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="name" className={styles.registerFormLabel}>
                ??????<b>*</b>
              </label>
              <div
                className={`${styles.registerCommonInputWrapper} ${styles.inlineInputRootWrapper}`}
              >
                <div className={styles.inlineInputWrapper}>
                  <input
                    type="radio"
                    name="SEX"
                    id="sex1"
                    value="1"
                    required
                    defaultChecked={gender === "1"}
                    onChange={() => setGender("1")}
                    className={styles.registerCommonInput}
                  />
                  <label htmlFor="sex1" className={styles.inlineInputLabel}>
                    ??????
                  </label>
                </div>
                <div className={styles.inlineInputWrapper}>
                  <input
                    type="radio"
                    name="SEX"
                    id="sex2"
                    value="2"
                    required
                    defaultChecked={gender === "0"}
                    onChange={() => setGender("0")}
                    className={styles.registerCommonInput}
                  />
                  <label htmlFor="sex2" className={styles.inlineInputLabel}>
                    ??????
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="email" className={styles.registerFormLabel}>
                ?????????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="email"
                  name="EMAIL"
                  id="email"
                  required
                  className={styles.registerCommonInput}
                />
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="tel" className={styles.registerFormLabel}>
                ????????????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="text"
                  name="TEL_NO"
                  id="tel"
                  required
                  className={styles.registerCommonInput}
                />
              </div>
            </div>
            <div className={styles.registerFormWrapper}>
              <label htmlFor="hp" className={styles.registerFormLabel}>
                ????????? ??????<b>*</b>
              </label>
              <div className={styles.registerCommonInputWrapper}>
                <input
                  type="text"
                  name="HP_NO"
                  id="hp"
                  required
                  readOnly
                  value={cellphoneNumber}
                  onChange={(e) => setCellphoneNumber(e.target.value)}
                  className={styles.registerCommonInput}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className={styles.registerSubmitButton}>
                ????????????
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
