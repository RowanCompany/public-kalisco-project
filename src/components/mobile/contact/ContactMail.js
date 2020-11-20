import React, { useState, useMemo, useRef, useEffect } from "react";
import axios from "axios";

import storeData from "./storeData";

import styles from "./mobile_contact.module.scss";

export default function ContactMail() {
    const [description, setDescription] = useState("");
    const textLength = useMemo(() => description.length, [description]);
    const [brand, setBrand] = useState("");
    const formRef = useRef(null);
    const [countryNumber, setCountryNumber] = useState("+82");
    const [telNumber, setTelNumber] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const authData = sessionStorage.getItem("tempAuthData");
        if (!authData) {
          window.location.assign("/contact");
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
              sessionStorage.removeItem("tempAuthData");
              window.location.assign("/contact");
            } else {
              setName(sName);
              setTelNumber(data["sMobileNo"]);
            }
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(formRef.current);
        data.append("phone", countryNumber + telNumber);
        const term = window.parseInt(data.get("term"));
        if (term === 2) {
          window.alert("개인정보 수집 이용에 동의하셔야 합니다.");
          return false;
        }
        let dataObject = {};
        data.forEach((value, key) => {
          switch (key) {
            case "code":
              dataObject[key] = window.parseInt(value);
              break;
            case "content":
              break;
            default:
              dataObject[key] = value;
              break;
          }
        });
        const json = JSON.stringify(dataObject);
        const apiUrl =
          "https://3nbky7tmc7.execute-api.ap-northeast-2.amazonaws.com/kalisco/api/v1";
        axios.post(apiUrl, json, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            window.alert("메일 발송에 성공했습니다!");
            sessionStorage.removeItem("tempAuthData");
            document.location.reload();
          })
          .catch(() => {
            window.alert("메일 발송에 실패했습니다, 관리자에게 문의해주세요.");
            return false;
        });
    }

    return (
        <>
          <div className={styles.contactMailSection}>
            <div className={styles.contactMailWrapper}>
              <div className={styles.contactMailTitle}>문의 작성</div>
              <div className={styles.contactMailForm}>
                <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="name" className={styles.contactMailLabel}>작성자</label>
                    <div className={styles.contactMailInputs}>
                      <input className={styles.contactMailInput} 
                        type="text"
                        name="name"
                        id="name" 
                        required
                        defaultValue={name}
                        readOnly={Boolean(name)}
                      />
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="email"  className={styles.contactMailLabel}>이메일</label>
                    <div className={styles.contactMailInputs}>
                      <input className={styles.contactMailInput} 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="이메일을 입력해주세요."
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="mobile"  className={styles.contactMailLabel}>휴대전화</label>
                    <div className={styles.contactMailInputs}>
                      <select
                        name="mobile"
                        id="mobile"
                        className={`${styles.contactMailSelect} ${styles.phone}`}
                        defaultValue="+82"
                        required
                        onChange={(e) => setCountryNumber(e.target.value)}
                      >
                        <option value="+82">+82</option>
                      </select>
                      <input className={styles.contactMailInput} 
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="휴대폰 번호 입력"
                        required
                        onInput={(e) => setTelNumber(e.target.value)}
                        defaultValue={telNumber}
                        readOnly={Boolean(telNumber)}
                      />
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="sub_type"  className={styles.contactMailLabel}>유형</label>
                    <div className={styles.contactMailInputs}>
                        <select
                          name="sub_type"
                          id="sub_type"
                          className={styles.contactMailSelect}
                          defaultValue=""
                          required
                        >
                        <option value="" hidden disabled>
                          선택
                        </option>
                        <option value="서비스">서비스</option>
                        <option value="메뉴">메뉴</option>
                        <option value="위생">위생</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <div className="d-flex">
                      <div>
                        <label htmlFor="code"  className={styles.contactMailLabel}>브랜드</label>
                        <div className={styles.contactMailInputs}>
                            <select
                              name="code"
                              id="code"
                              className={`${styles.contactMailSelect} ${styles.brand}`}
                              defaultValue={brand}
                              onChange={(e) => setBrand(e.target.value)}
                              required
                            >
                            <option value="" hidden disabled>
                              선택
                            </option>
                            <option value="101">캘리스코</option>
                            <option value="102">사보텐</option>
                            <option value="103">히바린</option>
                            <option value="104">타코벨</option>
                            <option value="105">센트럴키친</option>
                            <option value="106">reperk</option>
                          </select>
                        </div>
                      </div>
                      {storeData[brand] && (
                        <div>
                          <label htmlFor="store"  className={styles.contactMailLabel}>매장</label>
                          <div className={styles.contactMailInputs}>
                              <select
                                name="store"
                                id="store"
                                className={styles.contactMailSelect}
                                defaultValue=""
                                required
                              >
                              <option value="" hidden disabled>
                                선택
                              </option>
                              {storeData[brand] &&
                                storeData[brand].map((d, i) => (
                                  <option value={d.title} key={i}>
                                    {d.title}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="title" className={styles.contactMailLabel}>제목</label>
                    <div className={styles.contactMailInputs}>
                      <input className={`${styles.contactMailInput} ${styles.title}`} 
                        type="text"
                        name="title"
                        id="title"
                        placeholder="제목을 입력해주세요."
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.contactMailFormItem}>
                    <label htmlFor="content" className={styles.contactMailLabel}>내용</label>
                    <div className={styles.contactMailInputs}>
                      <div className={styles.contactMailTextareaBox}>
                        <textarea className={styles.contactMailTextarea}
                          name="content"
                          id="content"
                          placeholder="2000자 이내로 내용을 입력해주세요."
                          onInput={(e) => setDescription(e.target.value)}
                          maxLength={2000}
                          required
                        />
                        <div className={styles.contactMailTextareaCount}>{textLength} / 2,000</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactMailTermTitle}>[개인정보 수집·이용 안내]</div>
                  <div className={styles.contactMailTerm}>
                    <table className={styles.contactMailTermTable}>
                      <tbody>
                        <tr>
                          <td className={`${styles.contactMailTermColumn} ${styles.title}`}>수집 목적 및 이용목적</td>
                          <td className={styles.contactMailTermColumn}>서비스이용에 따른 본인인증 확인, 고객 문의에 대한 상담내용 접수 및 상담결과 회신</td>
                        </tr>
                        <tr>
                          <td className={`${styles.contactMailTermColumn} ${styles.title}`}>수집항목</td>
                          <td className={styles.contactMailTermColumn}>성명, 이메일, 휴대폰 번호</td>
                        </tr>
                        <tr>
                          <td className={`${styles.contactMailTermColumn} ${styles.title}`}>보유 및 이용기간</td>
                          <td className={styles.contactMailTermColumn}>회원정보만을 추출하여 별도로 축적하지는 않으며, 고객문의 사항과 함께 보존됩니다.<br />
                            <ul>
                              <li>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                              <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.contactMailTermWarning}>
                    <div className={styles.contactMailTermWarningText}>
                      *나이스평가정보에서 인증 받은 휴대폰 번호를 사용하고 있습니다.<br /><br />
                      *수집항목에 동의를 거부할 수 있으며, 동의를 거부 시 문의서비스를 등록하실 수 없습니다.
                    </div>
                    <div className={styles.contactMailTermWarningAgree}>
                      <div className={styles.contactMailTermWarningAgreeGroup}>
                        <input
                          type="radio"
                          name="term"
                          value="1"
                          id="term-agree"
                          required="required"
                          className={styles.contactMailTermWarningAgreeRadio}
                        />
                        <label className={styles.contactMailTermWarningAgreeText} htmlFor="term-agree">동의합니다.</label>
                      </div>
                      <div className={styles.contactMailTermWarningAgreeGroup}>
                        <input
                          type="radio"
                          name="term"
                          value="2"
                          id="term-disagree"
                          className={styles.contactMailTermWarningAgreeRadio}
                          required="required"
                        />
                        <label className={styles.contactMailTermWarningAgreeText} htmlFor="term-disagree">동의하지 않습니다.</label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactMailFormButtons}>
                   <button type="reset" className={styles.contactMailFormButton}>취소</button>
                   <button type="submit" className={`${styles.contactMailFormButton} ${styles.complete}`}>완료</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
    );
}