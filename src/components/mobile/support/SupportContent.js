import React from "react";
import { useParams } from "react-router-dom";
import BannerImage from "../../../static/images/mobile/img-mar-support-banner@2x.png";
import Banner from "../banner/Banner";

import SupportUnderConstruction from "./SupportUnderConstruction";
import SupportGiveaway from "./SupportGiveaway";
import SupportKakao from "./SupportKakao";
import SupportEvent from "./SupportEvent";

function SupportCaseRenderer({ subject }) {
  switch (subject) {
    case "membership":
      return <SupportUnderConstruction />;
    case "giveaway":
      return <SupportGiveaway />;
    case "partnership":
      return <SupportUnderConstruction />;
    case "kakaotalk-friends":
      return <SupportKakao />;
    case "events":
      return <SupportEvent />;
    default:
      return <React.Fragment />;
  }
}

export default function SupportContent() {
  const { subject } = useParams();
  const links = [
    {
      title: "멤버십",
      link: "/supports/membership",
    },
    {
      title: "상품권",
      link: "/supports/giveaway",
    },
    {
      title: "제휴",
      link: "/supports/partnership",
    },
    {
      title: "카카오톡 친구",
      link: "/supports/kakaotalk-friends",
    },
    {
      title: "이벤트&프로모션",
      link: "/supports/events",
    },
  ];

  return (
    <>
      <Banner title="Support" image={BannerImage} links={links} />
      <SupportCaseRenderer subject={subject} />
    </>
  );
}
