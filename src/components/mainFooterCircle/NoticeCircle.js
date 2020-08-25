import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import NoticeLogo from "./svg/NoticeLogo";

// TODO: Route Link 넣어야 함
function SupportCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <div>
                <NoticeLogo hovered={hovered} />
            </div>
            <div style={{ paddingTop: "32px" }}>Notice</div>
        </MainFooterCircle>
    );
}

export default SupportCircle;
