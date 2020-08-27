import React from "react";
import { Link } from "react-router-dom";
import styles from "./category_button.module.scss";

function CategoryButton({ link, isActive, text }) {
    return (
        <Link
            to={link}
            className={`${styles.categoryButton} ${
                isActive ? styles.active : ""
            }`}
        >
            {text}
        </Link>
    );
}

export default CategoryButton;
