import React from "react";
import { useParams } from "react-router-dom";
import BannerImage from "../../../static/images/mobile/img-mar-support-banner@2x.png";
import Banner from "../banner/Banner";

import SupportUnderconstruction from './SupportUnderconstruction';
import SupportKakao from './SupportKakao';

function SupportCaseRenderer({ subject }) {
    switch (subject) {
        case "membership":
            return <SupportUnderconstruction />;
        case "partnership":
            return <SupportUnderconstruction />;
        case "kakaotalk-friends":
            return <SupportKakao />
        case "events":
            return <React.Fragment />;
        default:
            return <React.Fragment />;
    }
}


export default function SupportContent() {
    const { subject } = useParams();
    const links = [
        {
            title: "멤버십",
            link: "/supports/membership"
        },
        {
            title: "상품권",
            link: "/supports/giveaway"
        },
        {
            title: "제휴",
            link: "/supports/partnership"
        },
        {
            title: "카카오톡 친구",
            link: "/supports/kakaotalk-friends"
        },
        {
            title: "이벤트&프로모션",
            link: "/supports/events"
        }
    ];

    return (
        <>
            <Banner title="support" image={BannerImage} links={links} />
            <SupportCaseRenderer subject={subject} />
        </>
    );
}