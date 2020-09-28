import React from "react";
import styles from "./category_button.module.scss";
import { Link } from "react-router-dom";

function CategoryLink(props) {
    const { text, type, parentType, link } = props;
    return (
        <Link
            to={link && link}
            className={`${styles.categoryButton} ${
                type === parentType && styles.active
            } ${!!props.darkOutline && styles.darkOutline}`}
            onClick={props.clickEvent}
        >
            {text}
        </Link>
    );
}

export default CategoryLink;
