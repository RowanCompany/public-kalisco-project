import React, { useEffect, useRef, useState } from "react";
import styles from "./event.module.scss";
import { url } from "../../../utils/server";
import { useParams } from "react-router-dom";
import axios from "axios";

// TODO: Admin Valid 추가
export default function EventForm() {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileURL, setFileURL] = useState("");
  const { eventId } = useParams();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (typeof eventId !== undefined) {
      axios
        .get(`${url}/events/${eventId}`)
        .then((res) => {
          const data = res.data.data[0];
          if (data.image) {
            setFileURL(data.image);
          }
          setTitle(data.title);
          setType(data.type);
          setDescription(data.description.trim().replaceAll("<br />", "\n"));
        })
        .catch((err) => console.log(err));
    }
  }, [eventId]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append("image", fileURL);
    const dataObject = {};
    formData.forEach((d, k) => {
      switch (k) {
        case "description":
          return (dataObject[k] = d.replace(/\n/g, "<br />"));
        default:
          return (dataObject[k] = d);
      }
    });
    const jsonString = JSON.stringify(dataObject);
    const authToken = localStorage.getItem("authToken");
    axios
      .put(`${url}/events/${eventId}`, jsonString, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => window.location.assign("/supports/events"))
      .catch((err) => {
        console.log(err);
        window.alert(
          "이벤트 수정에 실패했습니다! 동일현상 지속발생시 관리자에게 문의해주세요"
        );
      });
  }

  return (
    <section className={styles.eventFormSection}>
      <div className={styles.eventFormTitle}>이벤트 수정</div>
      <div className={styles.eventFormPanel}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.formWrapper}>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="title" className={styles.commonFormLabel}>
                  제목
                </label>
              </div>
              <input
                type="text"
                name="title"
                id="title"
                className={styles.titleInput}
                placeholder="제목을 입력해주세요."
                required
                defaultValue={title}
              />
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="type" className={styles.commonFormLabel}>
                  카테고리
                </label>
              </div>
              <select
                name="type"
                id="type"
                className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                required
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="" hidden disabled>
                  선택
                </option>
                <option value="saboten">사보텐</option>
                <option value="hibarin">히바린</option>
                <option value="tacobell">타코벨</option>
                <option value="centralkitchen">센트럴키친</option>
                <option value="kalisco">캘리스코</option>
              </select>
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="file" className={styles.commonFormLabel}>
                  파일첨부
                </label>
              </div>
              <div className="d-flex">
                <div>
                  <label htmlFor="file" className={styles.fileLabel}>
                    {fileName === "" ? "이미지파일 최대 3M" : fileName}
                  </label>
                </div>
                <div>
                  <button type="button" className={styles.fileButton}>
                    <label htmlFor="file" className={styles.fileButtonLabel}>
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
                    const target = e.target;
                    if (target.files.length > 0) {
                      setFileName(target.files[0].name);
                      const reader = new FileReader();
                      reader.readAsDataURL(target.files[0]);
                      reader.onloadend = () => {
                        setFileURL(reader.result);
                      };
                    } else {
                      setFileName("");
                    }
                  }}
                />
              </div>
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="description" className={styles.commonFormLabel}>
                  내용
                </label>
              </div>
              <div className={styles.descriptionBox}>
                <textarea
                  name="description"
                  id="description"
                  className={styles.description}
                  required
                  defaultValue={description}
                />
              </div>
            </div>
          </div>
          <div className={styles.formSubmitButtonWrapper}>
            <div>
              <button type="submit" className={styles.submitButton}>
                저장
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
