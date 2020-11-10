import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/nav/Nav";
//import ContactComponent from "../../components/contact/Contact";
import ContactAuth from "../../components/contact/ContactAuth";

function Contact() {
  return (
    <>
      <Nav />
      {/*<ContactComponent />*/}
      <ContactAuth />
      <Footer />
    </>
  );
}

export default Contact;
