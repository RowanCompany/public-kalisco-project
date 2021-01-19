import React, { useLayoutEffect, useState } from "react";
import { useMobileCheck } from "../../utils/mobile";
import DesktopAgreement from "../../components/register/Agreement";
import MobileAgreement from "../../pages/mobile/Agreement";

// TODO: 이용약관 동의 모바일 페이지 개발해야 함
export default function AgreementPage() {
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

  return useMobileCheck(width) ? <DesktopAgreement /> : <MobileAgreement />;
}
