import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import MainVerticalList from "../../components/mainVerticalList/MainVerticalList";
import MobileNav from "../../components/mobile/nav/MobileNav";

function useMobileCheck(currentWidth) {
  return currentWidth >= 1200;
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
  return (
    <>
      {useMobileCheck(width) ? <Nav /> : <MobileNav />}
      {useMobileCheck(width) ? <MainVerticalList /> : <>hi</>}
    </>
  );
}
