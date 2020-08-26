import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import EventLogo from "./svg/EventLogo";

// TODO: Route Link 넣어야 함
function EventCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <div>
                <EventLogo hovered={hovered} />
            </div>
            <div style={{ paddingTop: "32px" }}>이벤트</div>
        </MainFooterCircle>
    );
}

export default EventCircle;