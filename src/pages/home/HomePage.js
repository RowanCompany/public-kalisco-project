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
  const [height, setHeight] = useState(window.innerHeight);
  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      setWidth(e.target.innerWidth);
      setHeight(e.target.innerHeight);
    });

    return () => {
      window.addEventListener("resize", (e) => {
        setWidth(e.target.innerWidth);
        setHeight(e.target.innerHeight);
      });
    };
  }, []);
  return useMobileCheck(width) ? (
    <HomePageComponent />
  ) : (
    <MobileHomePage rootHeight={height} />
  );
}
