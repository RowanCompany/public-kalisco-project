import React, { useLayoutEffect, useState } from "react";
import { useMobileCheck } from "../../utils/mobile";
import FinalRegister from "../../components/register/final/FinalRegister";
import MobileFinalRegister from "../mobile/FinalRegister";

export default function FinalRegisterPage() {
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

  return useMobileCheck(width) ? <FinalRegister /> : <MobileFinalRegister />;
}
