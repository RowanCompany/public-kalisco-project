import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import ContactContent from "../../components/mobile/contact/Contact";

function Contact() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={`/:subject`} component={ContactContent} />
      </Switch>
      <Footer />
    </>
  );
}

export default Contact;
