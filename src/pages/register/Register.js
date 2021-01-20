import React, { useLayoutEffect, useState } from "react";
import Register from "../../components/register/Register";
import { useMobileCheck } from "../../utils/mobile";
import MobileRegister from "../mobile/Register";

export default function RegisterPage() {
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

  return useMobileCheck(width) ? <Register /> : <MobileRegister />;
}
