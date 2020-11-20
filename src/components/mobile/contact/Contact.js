import React from "react";
import { useParams } from "react-router-dom";
import BannerImage from "../../../static/images/mobile/hr_top_back@2x.png";
import Banner from "../banner/Banner";

import ContactAuth from "./ContactAuth";
import ContactMail from "./ContactMail";
import ContactFaq from "./ContactFaq";
import ContactNotice from "./ContactNotice";

function ContactCaseRenderer({ subject }) {
  switch (subject) {
    case "contact":
      return <ContactAuth />;
    case "mail":
      return <ContactMail />;
    case "faq":
      return <ContactFaq />;
    case "notices":
      return <ContactNotice />;
    default:
      return <React.Fragment />;
  }
}

export default function ContactContent() {
  const { subject } = useParams();
  const links = [
    {
      title: "공지사항",
      link: "/notices",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "문의하기",
      link: "/mail",
    },
  ];

  return (
    <>
      <Banner
        title="고객소통"
        image={BannerImage}
        links={links}
        altLinks={["/contact", "/mail"]}
      />
      <ContactCaseRenderer subject={subject} />
    </>
  );
}
