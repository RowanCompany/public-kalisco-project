import React, { useEffect, useState } from "react";
import styles from "./panel.module.scss";
import { Link, useParams } from "react-router-dom";
import { url } from "../../../utils/server";
import axios from "axios";
import { format } from "date-fns";
import _ from "lodash";

export default function RecipeDetailContent() {
  const [recipe, setRecipe] = useState({});
  const [authorized, setAuthorized] = useState(false);
  const recipeId = useParams().content;
  useEffect(() => {
    axios
      .get(`${url}/recipes/${recipeId}`)
      .then((res) => {
        setRecipe(res.data.data[0]);
        console.log(recipe);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

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
          setAuthorized(true);
        } else {
          setAuthorized(false);
          return Promise().reject("Not validated");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function handleRecipeRemove(e) {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    if (
      window.confirm(
        "정말 해당 게시물을 삭제하시겠습니까? 다시는 되돌릴 수 없습니다."
      )
    ) {
      axios
        .delete(`${url}/recipes/${recipeId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(() => window.location.assign("/products/recipes"))
        .catch((err) => {
          console.error(err);
          window.alert(
            "게시물 삭제에 실패했습니다, 동일현상 지속발생시 관리자에게 문의해주세요."
          );
          // window.location.reload();
        });
    }
  }

  return (
    !_.isEmpty(recipe) && (
      <section className={styles.eventContentWrapper}>
        <div className="container">
          <div className={styles.eventDetailWrapper}>
            <div className={styles.eventDetailTitle}>{recipe.title}</div>
            <div className={styles.eventDetailDate}>
              {format(new Date(recipe["created_at"]), "yyyy-MM-dd")}
            </div>
            <div className={styles.eventDetailNavigatorWrapper} />
            <div className={styles.eventDetailContentWrapper}>
              {recipe.image && (
                <div className="text-center">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              )}
              {/*<div style={{ paddingTop: "50px" }}>
            {event.description &&
              event.description.split("<br />").map((d, i) => (
                <React.Fragment key={i}>
                  {d}
                  <br />
                </React.Fragment>
              ))}
          </div>*/}
              <div style={{ paddingTop: "50px" }}>
                <b>조리 난이도</b>: {recipe.difficulty}
              </div>
              <div style={{ paddingTop: "8px" }}>
                <b>조리 시간</b>: {recipe.cooking_time}
              </div>
              <div>
                <div style={{ paddingTop: "16px" }}>
                  <b>재료</b>
                </div>
                <div>
                  {recipe.ingredients &&
                    recipe.ingredients.map((d, i) => (
                      <div key={i} style={{ paddingTop: "4px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <b>{d.title}</b>
                        </span>
                        <span>{d.description}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <div style={{ paddingTop: "16px" }}>
                  <b>만드는 법</b>
                </div>
                <div>
                  {recipe.making_flow &&
                    recipe.making_flow.map((d, i) => (
                      <div key={i} style={{ paddingTop: "4px" }}>
                        <span style={{ marginRight: "8px" }}>
                          <b>{i + 1}.</b>
                        </span>
                        <span>
                          {d.description &&
                            d.description.split("<br />").map((dt, ix) => (
                              <React.Fragment key={ix}>
                                {dt}
                                <br />
                              </React.Fragment>
                            ))}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.eventDetailPostNavigatorWrapper} />
            <div className={styles.eventEditButtonWrapper}>
              <Link to="/products/recipes" className={styles.eventEditButton}>
                목록으로
              </Link>
              {authorized && (
                <React.Fragment>
                  <Link
                    to={`/products/recipes/admin/form/${recipe.id}`}
                    className={styles.eventEditButton}
                  >
                    레시피 수정
                  </Link>
                  <button
                    type="button"
                    className={styles.eventEditButton}
                    onClick={handleRecipeRemove}
                  >
                    레시피 삭제
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  );
}
