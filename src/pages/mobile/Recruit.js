import React from "react";
import MobileNav from "../../components/mobile/nav/MobileNav";
import MobileRecruitComponent from "../../components/mobile/recruit/Recruit";
import Footer from "../../components/mobile/footer/Footer";
import Fab from "../../components/brand/fab/Fab";

export default function Recruit() {
  return (
    <>
      <MobileNav />
      <MobileRecruitComponent />
      <Footer />
      <Fab />
    </>
  );
}
