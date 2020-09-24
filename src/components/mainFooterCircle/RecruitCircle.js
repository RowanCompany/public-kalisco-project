import React, { useState } from "react";
import MainFooterCircle from "./MainFooterCircle";
import RecruitLogo from "./svg/RecruitLogo";
import { Link } from "react-router-dom";

// TODO: Route Link 넣어야 함
function RecruitCircle() {
    const [hovered, setHovered] = useState(false);

    return (
        <MainFooterCircle
            enterEvent={() => setHovered(true)}
            leaveEvent={() => setHovered(false)}
        >
            <Link
                to="/recruit"
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div>
                    <RecruitLogo hovered={hovered} />
                </div>
                <div style={{ paddingTop: "32px" }}>Recruit</div>
            </Link>
        </MainFooterCircle>
    );
}

export default RecruitCircle;
