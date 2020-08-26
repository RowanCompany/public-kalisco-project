import React from "react";
import SupportPanel from "./SupportPanel";
import { panelListWrapper } from "./panel.module.scss";

// TODO: Support 패널 데이터 넣어야 하고 Iteration 해야 함
function SupportPanelList() {
    const data = [
        {
            icon: "test",
            text: "멤버십",
            link: "/supports/membership",
        },
        {
            icon: "test",
            text: "제휴카드",
            link: "/supports/membership",
        },
        {
            icon: "test",
            text: "카카오톡 친구",
            link: "/supports/membership",
        },
        {
            icon: "test",
            text: "이벤트&프로모션",
            link: "/supports/membership",
        },
        {
            icon: "test",
            text: "상품권",
            link: "/supports/membership",
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
