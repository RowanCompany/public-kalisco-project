import React from "react";
import styles from "./category_button.module.scss";

function CategoryButton(props) {
    const { text, type, parentType } = props;
    return (
        <button
            type="button"
            className={`${styles.categoryButton} ${
                type === parentType ? styles.active : ""
            }`}
            onClick={props.clickEvent}
        >
            {text}
        </button>
    );
}

export default CategoryButton;
