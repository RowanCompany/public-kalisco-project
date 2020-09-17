import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import SupportLogo from "./svg/SupportLogo";

// TODO: Route Link 넣어야 함
function SupportCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <div>
                <SupportLogo hovered={hovered} />
            </div>
            <div style={{ paddingTop: "32px" }}>
                Customer Service
                <br />
                FAQ
            </div>
        </MainFooterCircle>
    );
}

export default SupportCircle;
