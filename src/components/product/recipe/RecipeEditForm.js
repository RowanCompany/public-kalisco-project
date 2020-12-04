import React, { useEffect, useRef, useState } from "react";
import styles from "./recipe.module.scss";
import _ from "lodash";
import axios from "axios";
import { url } from "../../../utils/server";
import { useParams } from "react-router-dom";

export default function RecipeEditForm() {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientNextId = useRef(1);
  const [flowDescriptions, setFlowDescriptions] = useState([]);
  const flowDescriptionNextId = useRef(1);
  const makingFlowFormNextId = useRef(1);
  const { recipeId } = useParams();
  const [title, setTitle] = useState("");
  const [titleDescription, setTitleDescription] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tempIngredients, setTempIngredients] = useState([]);
  const [tempMakingFlow, setTempMakingFlow] = useState([]);

  useEffect(() => {
    axios.get(`${url}/recipes/${recipeId}`).then((res) => {
      const data = res.data.data[0];
      setTitle(data.title);
      setTitleDescription(data.title_description);
      setCookingTime(data.cooking_time);
      setDifficulty(data.difficulty);
      setTempIngredients(data.ingredients);
      setTempMakingFlow(data.making_flow);
    });
  }, [recipeId]);

  useEffect(() => {
    ingredientNextId.current = tempIngredients.length;
  }, [tempIngredients]);

  useEffect(() => {
    makingFlowFormNextId.current = tempMakingFlow.length;
  }, [tempMakingFlow]);

  function handleSubmit(e) {
    e.preventDefault();
    const dataObject = {
      ingredients: [],
      making_flow: [],
    };
    const formData = new FormData(formRef.current);
    formData.forEach((d, i) => {
      if (i.includes("[")) {
        if (i.includes("making_flow")) {
          dataObject["making_flow"].push({
            seq: makingFlowFormNextId.current,
            description: d.replace(/\n/g, "<br />"),
          });
          makingFlowFormNextId.current++;
        } else {
          const bracketRegex = new RegExp(/\[(.*?)\]/g);
          const bracketMatchedArray = [...i.matchAll(bracketRegex)];
          const existIngredientCollection = _.find(dataObject["ingredients"], [
            "tempId",
            bracketMatchedArray[0][1],
          ]);
          if (!existIngredientCollection) {
            dataObject["ingredients"].push({
              [bracketMatchedArray[1][1]]: d,
              tempId: bracketMatchedArray[0][1],
            });
          } else {
            const tempIndex = _.findIndex(
              dataObject["ingredients"],
              (p) => p.tempId === bracketMatchedArray[0][1]
            );
            dataObject["ingredients"][tempIndex][bracketMatchedArray[1][1]] = d;
          }
        }
      } else {
        dataObject[i] = d;
      }
    });
    dataObject["image"] = fileURL;
    dataObject["ingredients"].forEach((d, i) => {
      delete dataObject["ingredients"][i]["tempId"];
      dataObject["ingredients"][i]["seq"] = i + 1;
    });
    dataObject["making_flow"].forEach((d, i) => {
      dataObject["making_flow"][i]["seq"] = i + 1;
    });
    const jsonString = JSON.stringify(dataObject);
    const authToken = localStorage.getItem("authToken");
    axios
      .put(`${url}/recipes/${recipeId}`, jsonString, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(() => {
        window.location.assign("/products/recipes");
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "레시피 수정에 실패했습니다! 동일현상 지속발생시 관리자에게 문의해주세요"
        );
      });
  }

  return (
    <section className={styles.recipeFormSection}>
      <div className={styles.recipeFormTitle}>레시피 수정</div>
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
                defaultValue={title}
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
                defaultValue={titleDescription}
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
                defaultValue={cookingTime}
                className={`${styles.commonFormInput} ${styles.writerFormInput}`}
              />
            </div>
            <div className={styles.formWrapper}>
              <div>
                <label htmlFor="difficulty" className={styles.commonFormLabel}>
                  난이도
                </label>
              </div>
              <select
                name="difficulty"
                id="difficulty"
                className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                required
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="" hidden disabled>
                  선택
                </option>
                <option value="상">상</option>
                <option value="중">중</option>
                <option value="하">하</option>
              </select>
            </div>
            {/* TODO: 재료 추가해야함 */}
            <div className={styles.formWrapper}>
              <div>
                <label className={styles.commonFormLabel}>재료</label>
              </div>
              <input
                type="text"
                name="ingredients[0][title]"
                required
                placeholder="재료 입력"
                defaultValue={
                  tempIngredients.length > 0 ? tempIngredients[0].title : ""
                }
                className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
              />
              <input
                type="text"
                name="ingredients[0][description]"
                required
                placeholder="재료 갯수 입력"
                defaultValue={
                  tempIngredients.length > 0
                    ? tempIngredients[0].description
                    : ""
                }
                className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
              />
              <button
                type="button"
                onClick={() => {
                  setIngredients(ingredients.concat(ingredientNextId.current));
                  ingredientNextId.current++;
                }}
                className={styles.addButton}
              >
                추가
              </button>
              <div className={styles.formWrapper}>
                {tempIngredients.length > 1 &&
                  _.drop(tempIngredients).map((d, i) => (
                    <div key={d.seq} style={{ paddingTop: "20px" }}>
                      <input
                        type="text"
                        name={`ingredients[${d.seq - 1}][title]`}
                        required
                        placeholder="재료 입력"
                        defaultValue={d.title}
                        className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
                      />
                      <input
                        type="text"
                        name={`ingredients[${d.seq - 1}][description]`}
                        required
                        placeholder="재료 갯수 입력"
                        defaultValue={d.description}
                        className={`${styles.commonFormInput} ${styles.multipleFormInput}`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setTempIngredients(
                            tempIngredients.filter((dt) => dt.seq !== d.seq)
                          )
                        }
                        className={styles.addButton}
                      >
                        제거
                      </button>
                    </div>
                  ))}
                {ingredients &&
                  ingredients.map((d) => (
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
              <div className={styles.descriptionBox}>
                <textarea
                  name="making_flow[]"
                  className={styles.description}
                  defaultValue={
                    tempMakingFlow.length > 0
                      ? tempMakingFlow[0].description
                      : ""
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    setFlowDescriptions(
                      flowDescriptions.concat(flowDescriptionNextId.current)
                    );
                    flowDescriptionNextId.current++;
                  }}
                  className={styles.addButton}
                >
                  추가
                </button>
              </div>
              <div className={styles.formWrapper}>
                {tempMakingFlow.length > 1 &&
                  _.drop(tempMakingFlow).map((d) => (
                    <div key={d.seq} className={styles.descriptionBox}>
                      <textarea
                        name="making_flow[]"
                        //onInput={(e) => setDescription(e.target.value)}
                        className={styles.description}
                        required
                        defaultValue={d.description.replaceAll("<br />", "\n")}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setTempMakingFlow(
                            tempMakingFlow.filter((dt) => dt.seq !== d.seq)
                          )
                        }
                        className={styles.addButton}
                      >
                        제거
                      </button>
                    </div>
                  ))}
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
