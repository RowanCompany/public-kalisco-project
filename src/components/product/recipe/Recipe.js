import React from "react";
import EventPanelData from "../../support/event/EventPanelNewData";
import EventPanel from "../../support/event/EventPanel";
import { eventListWrapper } from "../../support/event/event.module.scss";
import styles from "./recipe.module.scss";
import { Link } from "react-router-dom";

export default function Recipe() {
  return (
    <section className={styles.recipeSection}>
      <div className={styles.recipeFormButtonWrapper}>
        <Link to="/products/recipes/create" className={styles.recipeFormButton}>
          레시피 추가
        </Link>
      </div>
      <div className={eventListWrapper}>
        {EventPanelData &&
          EventPanelData.map((d, i) => <EventPanel key={i} {...d} />)}
      </div>
    </section>
  );
}
