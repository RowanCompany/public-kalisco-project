import React, { useEffect, useState } from "react";
//import EventPanelData from "../../support/event/EventPanelNewData";
import RecipePanel from "./RecipePanel";
import styles from "./panel.module.scss";
import { Link } from "react-router-dom";
import { url } from "../../../utils/server";
import axios from "axios";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    axios.get(`${url}/recipes`).then((res) => {
      setRecipes(res.data.data[0]);
    });

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

  return (
    <section className={styles.recipeSection}>
      {authorized && (
        <div className={styles.recipeFormButtonWrapper}>
          <Link
            to="/products/recipes/admin/form"
            className={styles.recipeFormButton}
          >
            레시피 추가
          </Link>
        </div>
      )}
      <div className={styles.eventListWrapper}>
        <div className={styles.gridWrapper}>
          {recipes.length > 0 &&
            recipes.map((d, i) => <RecipePanel key={i} {...d} />)}
        </div>
      </div>
    </section>
  );
}
