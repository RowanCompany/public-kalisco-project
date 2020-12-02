import React, { useRef, useState } from "react";
import styles from "./recipe.module.scss";

// TODO: 수정 props 받아야 함
export default function RecipeForm() {
  const formRef = useRef(null);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientNextId = useRef(1);
  const [flowDescriptions, setFlowDescriptions] = useState([]);
  const flowDescriptionNextId = useRef(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section className={styles.recipeFormSection}>
      {/* TODO: props 받아서 다시 처리해야 함 */}
      <div className={styles.recipeFormTitle}>레시피 등록/수정</div>
      <div className={styles.recipeFormPanel}>
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
                <label
                  htmlFor="title_description"
                  className={styles.commonFormLabel}
                >
                  제목 설명
                </label>
              </div>
              <input
                type="text"
                name="title_description"
                id="title_description"
                required
                className={`${styles.commonFormInput} ${styles.writerFormInput}`}
              />
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label
                  htmlFor="cooking_time"
                  className={styles.commonFormLabel}
                >
                  소요 시간
                </label>
              </div>
              <input
                type="text"
                name="cooking_time"
                id="cooking_time"
                required
                className={`${styles.commonFormInput} ${styles.writerFormInput}`}
              />
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="difficulty" className={styles.commonFormLabel}>
                  난이도
                </label>
              </div>
              <input
                type="text"
                name="difficulty"
                id="cooking_time"
                required
                className={`${styles.commonFormInput} ${styles.writerFormInput}`}
              />
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label
                  htmlFor="ingredients[]"
                  className={styles.commonFormLabel}
                >
                  재료
                </label>
              </div>
              <input
                type="text"
                name="ingredients[0][title]"
                required
                placeholder="재료 입력"
                className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
              />
              <input
                type="text"
                name="ingredients[0][description]"
                required
                placeholder="재료 갯수 입력"
                className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
              />
              <button
                type="button"
                onClick={() => {
                  setIngredients([...ingredients, ingredientNextId.current]);
                  ingredientNextId.current++;
                }}
                className={styles.addButton}
              >
                추가
              </button>
              <div className={styles.formWrapper}>
                {ingredients &&
                  ingredients.map((d, i) => (
                    <div key={d} style={{ paddingTop: "20px" }}>
                      <input
                        type="text"
                        name={`ingredients[${d}][title]`}
                        required
                        placeholder="재료 입력"
                        className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
                      />
                      <input
                        type="text"
                        name={`ingredients[${d}][description]`}
                        required
                        placeholder="재료 갯수 입력"
                        className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setIngredients(ingredients.filter((dt) => dt !== d))
                        }
                        className={styles.addButton}
                      >
                        제거
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label
                  htmlFor="ingredients[]"
                  className={styles.commonFormLabel}
                >
                  조리법
                </label>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFlowDescriptions([
                    ...flowDescriptions,
                    flowDescriptionNextId.current,
                  ]);
                  flowDescriptionNextId.current++;
                }}
                className={styles.addButton}
                style={{ margin: 0 }}
              >
                추가
              </button>
              <div className={styles.formWrapper}>
                {flowDescriptions &&
                  flowDescriptions.map((d) => (
                    <div key={d} className={styles.descriptionBox}>
                      <textarea
                        name="making_flow[]"
                        //onInput={(e) => setDescription(e.target.value)}
                        className={styles.description}
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setFlowDescriptions(
                            flowDescriptions.filter((dt) => dt !== d)
                          )
                        }
                        className={styles.addButton}
                      >
                        제거
                      </button>
                    </div>
                  ))}
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
