import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import RecruitComponent from "../../components/recruit/Recruit";
import Fab from "../../components/brand/fab/Fab";
import { useMobileCheck } from "../../utils/mobile";

function DesktopRecruitComponent() {
  return (
    <>
      <Nav />
      <RecruitComponent />
      <Footer />
      <Fab />
    </>
  );
}

function Recruit() {
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
  return useMobileCheck(width) ? <DesktopRecruitComponent /> : "";
}

export default Recruit;
