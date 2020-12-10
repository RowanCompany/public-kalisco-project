import React from "react";
import styles from "./register.module.scss";
import Nav from "../nav/Nav";
import Footer from "../Footer";

export default function Register() {
  return (
    <>
      <Nav />
      <div className={styles.registerBannerWrapper}>본인인증</div>
      <section className={styles.registerSection}>
        <div className={styles.registerBox}>
          <div className={styles.registerButtonWrapper}>
            <button type="button" className={styles.registerNextButton}>
              다음
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
