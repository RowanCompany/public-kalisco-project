import React, { useEffect, useRef } from "react";
import Nav from "../nav/Nav";
import Footer from "../Footer";
import styles from "./login.module.scss";
import loginIcon from "../../static/svg/icon-loginman.svg";
import axios from "axios";
import { url } from "../../utils/server";
//import { useMobileCheck } from "../../utils/mobile";

export default function Login() {
  const formRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const dataObject = {};
    formData.forEach((d, k) => (dataObject[k] = d));
    const jsonString = JSON.stringify(dataObject);
    axios
      .post(`${url}/admin/signin`, jsonString, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        localStorage.setItem("authToken", data.accessToken);
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "관리자 로그인에 실패했습니다! 동일현상 지속발생시 관리자에게 문의해주세요"
        );
      });
  }

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    axios
      .post(
        `${url}/admin/valid`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        const status = res.data.status;
        if (status === "OK") {
          window.location.assign("/");
        } else {
          return Promise().reject("Not validated");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Nav />
      <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginPanel}>
            <div className={styles.loginIconWrapper}>
              <div className={styles.loginIcon}>
                <img src={loginIcon} alt="login icon" />
              </div>
            </div>
            <div className={styles.loginTitle}>관리자 로그인</div>
            <div className={styles.loginFormWrapper}>
              <div className={styles.loginFormPanel}>
                <div>
                  <label htmlFor="email" className={styles.loginInputLabel}>
                    아이디
                  </label>
                </div>
                <div className={styles.loginInputWrapper}>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className={styles.loginInput}
                    placeholder="아이디 입력"
                  />
                </div>
                {/*<small className={styles.loginValidationText}>
                아이디를 입력해주세요.
              </small>*/}
              </div>
              <div className={styles.loginFormPanel}>
                <div>
                  <label htmlFor="password" className={styles.loginInputLabel}>
                    비밀번호
                  </label>
                </div>
                <div className={styles.loginInputWrapper}>
                  <input
                    type="password"
                    name="password"
                    className={styles.loginInput}
                    placeholder="비밀번호 입력"
                    id="password"
                  />
                </div>
                {/*<small className={styles.loginValidationText}>
                아이디를 입력해주세요.
              </small>*/}
              </div>
              <div className={styles.loginButtonWrapper}>
                <button type="submit" className={styles.loginButton}>
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
