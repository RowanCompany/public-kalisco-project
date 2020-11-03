import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import MainVerticalList from "../../components/mainVerticalList/MainVerticalList";
import MobileHomePage from "../mobile/HomePage";
import { useMobileCheck } from "../../utils/mobile";

function HomePageComponent() {
  return (
    <>
      <Nav />
      <MainVerticalList />
    </>
  );
}

export default function HomePage() {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(e.target.innerWidth);
    });

    return () => {
      window.addEventListener("resize", (e) => {
        setWidth(e.target.innerWidth);
      });
    };
  }, []);
  return useMobileCheck(width) ? <HomePageComponent /> : <MobileHomePage />;
}
