import React from "react";

export default function MobileNavList(props) {
  const { title, subNav } = props;
  return (
    <li>
      <div>{title}</div>
      <div>
        <ul>
          {subNav &&
            subNav.map((d, i) => (
              <li key={i}>
                <a href={d.link}>{d.title}</a>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}
