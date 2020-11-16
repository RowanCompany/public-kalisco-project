import React from "react";
import BannerImage from "../../../static/images/mobile/hr_top_back@2x.png";
import Banner from "../banner/Banner";
import { useParams } from "react-router-dom";
import HrTalent from "./HrTalent";
import HrEducation from "./HrEducation";
import HrWelfare from "./HrWelfare";

function HRCaseRenderer({ subject }) {
  switch (subject) {
    case "talent":
      return <HrTalent />;
    case "education":
      return <HrEducation />;
    case "welfare":
      return <HrWelfare />;
    default:
      return <React.Fragment />;
  }
}

export default function HrContent() {
  const { subject } = useParams();
  const links = [
    {
      title: "인재상",
      link: "/hr/talent",
    },
    {
      title: "교육",
      link: "/hr/education",
    },
    {
      title: "인사제도",
      link: "/hr/welfare",
    },
  ];

  return (
    <>
      <Banner image={BannerImage} title="HR" links={links} />
      <HRCaseRenderer subject={subject} />
    </>
  );
}
