import React from "react";
import styles from "./mobile_hibarin.module.scss";
import { Link } from "react-router-dom";

export default function HibarinMenuNavigator({ category }) {
  const categoryData = [
    {
      text: "Katsu",
      type: "katsu",
      link: "/brand/hibarin/menu/katsu",
    },
    {
      text: "& Friends",
      type: "friends",
      link: "/brand/hibarin/menu/friends",
    },
    {
      text: "drink",
      type: "drink",
      link: "/brand/hibarin/menu/drink",
    },
  ];

  return (
    <nav>
      <ul className={styles.menuNavigatorWrapper}>
        {categoryData.map((d, i) => (
          <li
            key={i}
            className={`${styles.menuNavigator} ${
              category === d.type && styles.menuNavigatorActive
            }`}
          >
            <Link to={d.link}>{d.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
