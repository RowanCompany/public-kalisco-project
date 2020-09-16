import React, { useState, useMemo, useRef, useEffect } from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";
import storeData from "./storeData";
import axios from "axios";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Contact() {
    const [description, setDescription] = useState("");
    const textLength = useMemo(() => description.length, [description]);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const formRef = useRef(null);
    const [countryNumber, setCountryNumber] = useState("+82");
    const [telNumber, setTelNumber] = useState("");

    let query = useQuery();
    const querySubject = query.get("subject");
    useEffect(() => {
        if (querySubject) {
            switch (querySubject) {
                case "saboten":
                    setBrand(102);
                    break;
                case "hibarin":
                    setBrand(103);
                    break;
                default:
                    break;
            }
        }
        return () => setBrand("");
    }, [querySubject]);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(formRef.current);
        data.append("phone", countryNumber + telNumber);
        let dataObject = {};
        data.forEach((value, key) => {
            switch (key) {
                case "code":
                    dataObject[key] = window.parseInt(value);
                    break;
                case "content":
                    dataObject[key] = value.replace(/\n/g, "<br />");
                    break;
                default:
                    dataObject[key] = value;
                    break;
            }
        });
        const json = JSON.stringify(dataObject);
        const apiUrl =
            "https://3nbky7tmc7.execute-api.ap-northeast-2.amazonaws.com/kalisco/api/v1";
        axios
            .post(apiUrl, json, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                window.alert("메일 발송에 성공했습니다!");
                document.location.reload();
            })
            .catch(() => {
                window.alert(
                    "메일 발송에 실패했습니다, 관리자에게 문의해주세요."
                );
                return false;
            });
    }

    return (
        <>
            <ContactBanner />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactTitle}>문의 작성</div>
                    <div className={styles.contactFormPanel}>
                        {/* <form encType="multipart/form-data"> */}
                        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className={styles.commonFormLabel}
                                    >
                                        작성자
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                                />
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className={styles.commonFormLabel}
                                    >
                                        이메일
                                    </label>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                                />
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="mobile"
                                        className={styles.commonFormLabel}
                                    >
                                        휴대전화
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <select
                                            name="mobile"
                                            id="mobile"
                                            className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                                            defaultValue="+82"
                                            required
                                            onChange={(e) =>
                                                setCountryNumber(e.target.value)
                                            }
                                        >
                                            <option value="+82">+82</option>
                                        </select>
                                    </div>
                                    <div className="position-relative">
                                        <input
                                            type="tel"
                                            name="tel"
                                            id="tel"
                                            placeholder="휴대전화번호 입력"
                                            required
                                            onInput={(e) =>
                                                setTelNumber(e.target.value)
                                            }
                                            className={`${styles.commonFormInput} ${styles.telFormInput}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div className="d-flex">
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="type"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                분류
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                name="type"
                                                id="type"
                                                className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                                                defaultValue=""
                                                required
                                                onChange={(e) =>
                                                    setCategory(e.target.value)
                                                }
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                                <option value="칭찬">
                                                    칭찬
                                                </option>
                                                <option value="불만">
                                                    불만
                                                </option>
                                                <option value="문의">
                                                    문의
                                                </option>
                                                <option value="기타">
                                                    기타
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    {category && (
                                        <div>
                                            <div>
                                                <label
                                                    htmlFor="sub_type"
                                                    className={
                                                        styles.commonFormLabel
                                                    }
                                                >
                                                    유형
                                                </label>
                                            </div>
                                            <div className="position-relative">
                                                <select
                                                    name="sub_type"
                                                    id="sub_type"
                                                    className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                                                    defaultValue=""
                                                    required
                                                >
                                                    <option
                                                        value=""
                                                        hidden
                                                        disabled
                                                    >
                                                        선택
                                                    </option>
                                                    <option value="서비스">
                                                        서비스
                                                    </option>
                                                    <option value="메뉴">
                                                        메뉴
                                                    </option>
                                                    <option value="위생">
                                                        위생
                                                    </option>
                                                    <option value="기타">
                                                        기타
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div className="d-flex">
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="code"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                브랜드
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                name="code"
                                                id="code"
                                                className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                                                defaultValue={brand}
                                                onChange={(e) =>
                                                    setBrand(e.target.value)
                                                }
                                                required
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                                <option value="101">
                                                    캘리스코
                                                </option>
                                                <option value="102">
                                                    사보텐
                                                </option>
                                                <option value="103">
                                                    히바린
                                                </option>
                                                <option value="104">
                                                    타코벨
                                                </option>
                                                <option value="105">
                                                    센트럴키친
                                                </option>
                                                <option value="106">
                                                    re-pulk
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    {storeData[brand] && (
                                        <div>
                                            <div>
                                                <label
                                                    htmlFor="store"
                                                    className={
                                                        styles.commonFormLabel
                                                    }
                                                >
                                                    매장
                                                </label>
                                            </div>
                                            <div className="position-relative">
                                                <select
                                                    name="store"
                                                    id="store"
                                                    className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                                                    defaultValue=""
                                                    required
                                                >
                                                    <option
                                                        value=""
                                                        hidden
                                                        disabled
                                                    >
                                                        선택
                                                    </option>
                                                    {storeData[brand] &&
                                                        storeData[brand].map(
                                                            (d, i) => (
                                                                <option
                                                                    value={
                                                                        d.title
                                                                    }
                                                                    key={i}
                                                                >
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
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className={styles.commonFormLabel}
                                    >
                                        제목
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className={`${styles.titleInput}`}
                                    placeholder="제목을 입력해주세요."
                                    required
                                />
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="content"
                                        className={styles.commonFormLabel}
                                    >
                                        내용
                                    </label>
                                </div>
                                <div className={styles.descriptionPanel}>
                                    <div>
                                        <textarea
                                            name="content"
                                            id="content"
                                            placeholder="2000자 이내로 내용을 입력해주세요."
                                            onInput={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            maxLength={2000}
                                            className={styles.description}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className={styles.countText}>
                                        {textLength} / 2,000
                                    </div>
                                </div>
                            </div>
                            {/* <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="file"
                                        className={styles.commonFormLabel}
                                    >
                                        파일첨부
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <label
                                            htmlFor="file"
                                            className={styles.fileLabel}
                                        >
                                            {fileName === ""
                                                ? "이미지파일 최대 20M"
                                                : fileName}
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className={styles.fileButton}
                                        >
                                            <label
                                                htmlFor="file"
                                                className={
                                                    styles.fileButtonLabel
                                                }
                                            >
                                                찾아보기
                                            </label>
                                        </button>
                                    </div>
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        hidden
                                        accept="image/*"
                                        onInput={(e) => {
                                            if (e.target.files.length > 0) {
                                                setFileName(
                                                    e.target.files[0].name
                                                );
                                            } else {
                                                setFileName("");
                                            }
                                        }}
                                    />
                                </div>
                            </div> */}
                            <div className={styles.formSubitButtonWrapper}>
                                <div>
                                    <button
                                        type="reset"
                                        className={styles.resetButton}
                                    >
                                        취소
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                    >
                                        완료
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
