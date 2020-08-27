import React, { useState } from "react";
import styles from "./category_button.module.scss";

function CategoryButton({ isActive, text }) {
    
    return (
        <button
            type="button"
            className={`${styles.categoryButton} ${
                isActive ? styles.active : ""
            }`}
        >
            {text}
        </button>
    );
}

export default CategoryButton;
