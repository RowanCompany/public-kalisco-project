import React from "react";
import MobileNav from "../../components/mobile/nav/MobileNav";
import MobileMainVerticalList from "../../components/mobile/mainVerticalList/MobileMainVerticalList";

export default function MobileHomePage({ rootHeight }) {
  return (
    <>
      <MobileNav />
      <MobileMainVerticalList rootHeight={rootHeight} />
    </>
  );
}
