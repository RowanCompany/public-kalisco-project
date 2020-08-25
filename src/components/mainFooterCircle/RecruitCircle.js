import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import RecruitLogo from "./svg/RecruitLogo";

// TODO: Route Link 넣어야 함
function RecruitCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <div>
                <RecruitLogo hovered={hovered} />
            </div>
            <div style={{ paddingTop: "32px" }}>Recruit</div>
        </MainFooterCircle>
    );
}

export default RecruitCircle;
