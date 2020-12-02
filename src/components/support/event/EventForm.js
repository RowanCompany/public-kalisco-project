import React, { useRef, useState } from "react";
import styles from "./event.module.scss";

// TODO: 수정 props 받아야 함
export default function EventForm() {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section className={styles.eventFormSection}>
      {/* TODO: props 받아서 다시 처리해야 함 */}
      <div className={styles.eventFormTitle}>이벤트 작성/수정</div>
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
              />
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
                    if (e.target.files.length > 0) {
                      setFileName(e.target.files[0].name);
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
