import React, { useState, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav/Nav";
//import ContactComponent from "../../components/contact/Contact";
import ContactComponent from "../../components/contact/Contact";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useMobileCheck } from "../../utils/mobile";
import MobileContactComponent from "../mobile/Contact";

function DesktopContactComponent({ match }) {
  return (
    <>
      <Nav />
      {/*<ContactComponent />*/}
      <ContactComponent />
      <Footer />
    </>
  );
}

function Contact() {
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

  const match = useRouteMatch();
  return useMobileCheck(width) ? (
    <DesktopContactComponent match={match} />
  ) : (
    <MobileContactComponent match={match} />
  );
}

export default Contact;
