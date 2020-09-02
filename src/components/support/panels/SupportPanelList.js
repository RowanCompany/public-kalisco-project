import React from "react";
import SupportPanel from "./SupportPanel";
import { panelListWrapper } from "./panel.module.scss";
import iconMembership from "../../../static/svg/icon-membership.svg";
import iconCreditCard from "../../../static/svg/icon-credit-card.svg";
import iconKakao from "../../../static/svg/icon-kakao.svg";
import iconEventPromotion from "../../../static/svg/icon-event-promotion.svg";
import iconGiftCard from "../../../static/svg/icon-giftcard.svg";

function SupportPanelList() {
    const data = [
        {
            icon: iconMembership,
            text: "멤버십",
            link: "/supports/membership",
        },
        {
            icon: iconGiftCard,
            text: "상품권",
            link: "/supports/giveaway",
        },
        {
            icon: iconCreditCard,
            text: "제휴카드",
            link: "/supports/partnership",
        },
        {
            icon: iconKakao,
            text: "카카오톡 친구",
            link: "/supports/kakaotalk-friends",
        },
        {
            icon: iconEventPromotion,
            text: "이벤트&프로모션",
            link: "/supports/events",
        },
    ];
    return (
        <div className="container">
            <div className={panelListWrapper}>
                {data.map((d, i) => (
                    <SupportPanel key={i} {...d} />
                ))}
            </div>
        </div>
    );
}

export default SupportPanelList;
