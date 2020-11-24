import React from "react";
import styles from "./mobile_saboten.module.scss";
import { Link } from "react-router-dom";

export default function SabotenMenuNavigator({ category }) {
  const categoryData = [
    {
      text: "Katsu",
      type: "katsu",
      link: "/brand/saboten/menu/katsu",
    },
    {
      text: "Donburi",
      type: "donburi",
      link: "/brand/saboten/menu/donburi",
    },
    {
      text: "Noodles",
      type: "noodles",
      link: "/brand/saboten/menu/noodle",
    },
    {
      text: "Side",
      type: "side",
      link: "/brand/saboten/menu/side",
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
