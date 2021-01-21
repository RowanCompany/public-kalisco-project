import React, { useEffect, useRef, useState } from "react";
import terms from "../../register/terms.json";
import styles from "./register.module.scss";

export default function Agreement() {
  const [term, setTerm] = useState(null);
  const [privacy, setPrivacy] = useState(null);
  const [thirdParty, setThirdParty] = useState(null);
  const isTempAllAgreeInitialMount = useRef(true);
  const termLongText = terms.termText;
  const [tempAllAgree, setTempAllAgree] = useState(false);
  const [marketingEmailAllowed, setMarketingEmailAllowed] = useState(false);
  const [marketingSMSAllowed, setMarketingSMSAllowed] = useState(false);
  const [marketingPushAllowed, setMarketingPushAllowed] = useState(false);
  const [advertisingAllowed, setAdvertisingAllowed] = useState(false);

  function handleNextRegisterStep(e) {
    e.preventDefault();
    if (term !== 1 || privacy !== 1 || thirdParty !== 1) {
      window.alert("필수 동의 항목에 모두 동의해주세요.");
      return false;
    }
    const tempAgreementInformation = {
      INTEGRATED_YN: "Y",
      USE_TERMS_YN: "Y",
      PRIVACY_YN: "Y",
      MARKETING_YN:
        marketingEmailAllowed || marketingSMSAllowed || marketingPushAllowed
          ? "Y"
          : "N",
      ADVERTISING_YN: advertisingAllowed ? "Y" : "N",
      POINT_YN: "N",
      THIRD_PARTY_YN: "Y",
      HP_YN: marketingPushAllowed ? "Y" : "N",
      SMS_YN: marketingSMSAllowed ? "Y" : "N",
      EMAIL_YN: marketingEmailAllowed ? "Y" : "N",
      SYSTEM_GBN: "A1_MEMBER",
    };
    window.sessionStorage.setItem(
      "tempAgreementData",
      JSON.stringify(tempAgreementInformation)
    );
    window.location.assign("/register");
  }

  useEffect(() => {
    if (isTempAllAgreeInitialMount.current) {
      isTempAllAgreeInitialMount.current = false;
    } else {
      setMarketingEmailAllowed(tempAllAgree);
      setMarketingSMSAllowed(tempAllAgree);
      setMarketingPushAllowed(tempAllAgree);
      setAdvertisingAllowed(tempAllAgree);
    }
  }, [tempAllAgree]);

  return (
    <>
      <div className={styles.registerBannerWrapper}>회원가입</div>
      <section className={styles.registerSection}>
        <div className={styles.registerBox}>
          <div className={styles.agreementWrapper}>
            <label htmlFor="terms" className={styles.agreementText}>
              (필수) 회원이용 약관
            </label>
          </div>
          <div className={styles.agreementDescriptionBox}>{termLongText}</div>
          <div className={`${styles.agreementWrapper} ${styles.radioWrapper}`}>
            <input
              type="radio"
              required
              name="term"
              id="term-agree"
              value="1"
              checked={term === 1}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
            <label htmlFor="term-agree" className={styles.agreementRadioText}>
              동의합니다.
            </label>
            <input
              type="radio"
              required
              name="term"
              id="term-disagree"
              value="2"
              checked={term === 2}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
            <label
              htmlFor="term-disagree"
              className={styles.agreementRadioText}
            >
              동의하지 않습니다.
            </label>
          </div>
          <div className={styles.agreementWrapper}>
            <span className={styles.agreementText}>
              (필수) 개인정보수집 및 이용동의
            </span>
          </div>
          <div className={styles.agreementWrapper}>
            <table className={styles.termTable}>
              <thead>
                <tr className={styles.tdTitle}>
                  <th>항목</th>
                  <th>목적</th>
                  <th>이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdTitle}>
                    이름, 성별, 생년월일, 휴대폰번호, 이메일, 주소, CI, DI
                  </td>
                  <td>
                    <ul>
                      <li>본인확인</li>
                      <li>본인여부 확인</li>
                      <li>홈페이지 회원서비스 이용</li>
                      <li>계약이행을 위한 연락, 민원 등 고객 고충처리</li>
                    </ul>
                  </td>
                  <td className="text-center">서비스 탈퇴 시까지</td>
                </tr>
                <tr>
                  <td className={styles.tdTitle}>법정 생년월일</td>
                  <td>
                    <ul>
                      <li>만 14세 미만인지 확인</li>
                    </ul>
                  </td>
                  <td className="text-center">서비스 탈퇴 시까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${styles.agreementWrapper} ${styles.radioWrapper}`}>
            <input
              type="radio"
              required
              name="privacy"
              id="privacy-agree"
              value="1"
              checked={privacy === 1}
              onChange={(e) => setPrivacy(Number(e.target.value))}
            />
            <label
              htmlFor="privacy-agree"
              className={styles.agreementRadioText}
            >
              동의합니다.
            </label>
            <input
              type="radio"
              required
              name="privacy"
              id="privacy-disagree"
              value="2"
              checked={privacy === 2}
              onChange={(e) => setPrivacy(Number(e.target.value))}
            />
            <label
              htmlFor="privacy-disagree"
              className={styles.agreementRadioText}
            >
              동의하지 않습니다.
            </label>
          </div>
          <div className={styles.agreementWrapper}>
            <span className={styles.agreementText}>
              (필수) 회원정보의 제3자 제공에 대한 동의
            </span>
          </div>
          <div className={styles.agreementWrapper}>
            <table className={styles.termTable}>
              <thead>
                <tr className={styles.tdTitle}>
                  <th>항목</th>
                  <th>목적</th>
                  <th>이용기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tdTitle}>이름, 휴대폰 번호</td>
                  <td>
                    <ul>
                      <li>회원서비스 이용</li>
                    </ul>
                  </td>
                  <td className="text-center">서비스 탈퇴 시까지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${styles.agreementWrapper} ${styles.radioWrapper}`}>
            <input
              type="radio"
              required
              name="third_party"
              id="third_party-agree"
              value="1"
              checked={thirdParty === 1}
              onChange={(e) => setThirdParty(Number(e.target.value))}
            />
            <label
              htmlFor="third_party-agree"
              className={styles.agreementRadioText}
            >
              동의합니다.
            </label>
            <input
              type="radio"
              required
              name="third_party"
              id="third_party-disagree"
              value="2"
              checked={thirdParty === 2}
              onChange={(e) => setThirdParty(Number(e.target.value))}
            />
            <label
              htmlFor="third_party-disagree"
              className={styles.agreementRadioText}
            >
              동의하지 않습니다.
            </label>
          </div>
          <div className={styles.agreementText}>
            이벤트 등 프로모션 알림 메일 수신(선택)
          </div>
          <div className={styles.agreementDescriptionText}>
            캘리스코에서 제공하는 상품 및 서비스 홍보등의 마케팅 활동에 동의
            합니다.
            <br />
            귀하는 마케팅 활동을 거부할 권리가 있으며 거부시에는 이용 목적에
            따른 혜택에 제한이 있을 수 있습니다
            <br />
            <span style={{ paddingTop: "16px", display: "inline-block" }}>
              ※ 선택항목은 동의하지 않아도 회원가입이 가능합니다.
            </span>
          </div>
          <div
            className={styles.agreementWrapper}
            style={{ paddingTop: "12px" }}
          >
            <input
              type="checkbox"
              name="all_check_marketing"
              id="all_check_marketing"
              checked={tempAllAgree}
              onChange={() => setTempAllAgree(!tempAllAgree)}
            />
            <label
              htmlFor="all_check_marketing"
              className={styles.agreementRadioText}
            >
              마케팅 수신 전체 동의
            </label>
          </div>
          <div className={styles.checkboxAgreementBox}>
            <div>
              <input
                type="checkbox"
                name="marketing_email"
                id="marketing_email"
                onChange={() =>
                  setMarketingEmailAllowed(!marketingEmailAllowed)
                }
                checked={marketingEmailAllowed}
              />
              <label
                htmlFor="marketing_email"
                className={styles.agreementRadioText}
              >
                마케팅 이메일 수신
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="marketing_sms"
                id="marketing_sms"
                onChange={() => setMarketingSMSAllowed(!marketingSMSAllowed)}
                checked={marketingSMSAllowed}
              />
              <label
                htmlFor="marketing_sms"
                className={styles.agreementRadioText}
              >
                마케팅 SMS 수신
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="marketing_push"
                id="marketing_push"
                onChange={() => setMarketingPushAllowed(!marketingPushAllowed)}
                checked={marketingPushAllowed}
              />
              <label
                htmlFor="marketing_push"
                className={styles.agreementRadioText}
              >
                마케팅 푸시 수신
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="marketing_push"
                id="marketing_push"
                onChange={() => setAdvertisingAllowed(!advertisingAllowed)}
                checked={advertisingAllowed}
              />
              <label
                htmlFor="marketing_push"
                className={styles.agreementRadioText}
              >
                맞춤형 광고 동의
              </label>
            </div>
          </div>
          <div className={styles.registerButtonWrapper}>
            <button
              type="button"
              className={styles.registerNextButton}
              onClick={handleNextRegisterStep}
            >
              다음
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
