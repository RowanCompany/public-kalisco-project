import React from "react";
import Nav from "../nav/Nav";
import Footer from "../Footer";
import styles from "./login.module.scss";
import loginIcon from "../../static/svg/icon-loginman.svg";
//import { useMobileCheck } from "../../utils/mobile";

export default function Login() {
  function handleSubmit(event) {
    console.log("submit!");
    event.preventDefault();
  }

  return (
    <>
      <Nav />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginPanel}>
            <div className={styles.loginIconWrapper}>
              <div className={styles.loginIcon}>
                <img src={loginIcon} alt="login icon" />
              </div>
            </div>
            <div className={styles.loginTitle}>로그인</div>
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
                    id="email"
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
