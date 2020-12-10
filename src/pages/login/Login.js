import React, { useLayoutEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import { useMobileCheck } from "../../utils/mobile";
import LoginComponent from "../../components/login/Login";

function DesktopLoginComponent() {
  return (
    <>
      <Nav />
      <LoginComponent />
      <Footer />
    </>
  );
}

export default function Login() {
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

  return useMobileCheck(width) ? <DesktopLoginComponent /> : <React.Fragment />;
}
