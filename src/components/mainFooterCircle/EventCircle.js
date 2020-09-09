import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import EventLogo from "./svg/EventLogo";
import { Link } from "react-router-dom";

// TODO: Route Link 넣어야 함
function EventCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <Link to="/supports/events">
                <div>
                    <EventLogo hovered={hovered} />
                </div>
                <div style={{ paddingTop: "32px" }}>이벤트</div>
            </Link>
        </MainFooterCircle>
    );
}

export default EventCircle;
