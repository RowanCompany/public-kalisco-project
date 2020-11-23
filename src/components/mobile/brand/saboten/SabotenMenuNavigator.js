import React from "react";
import styles from "./mobile_saboten.module.scss";
import { Link } from "react-router-dom";

export default function SabotenMenuNavigator({ category }) {
  const categoryData = [
    {
      text: "Katsu",
      type: "katsu",
      link: "/brand/hibarin/menu/katsu",
    },
    {
      text: "Donburi",
      type: "friends",
      link: "/brand/hibarin/menu/friends",
    },
    {
      text: "Noodles",
      type: "drink",
      link: "/brand/hibarin/menu/drink",
    },
    {
      text: "Side",
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
