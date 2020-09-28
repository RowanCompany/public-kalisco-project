import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link
                to="/contact"
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
                    <SupportLogo hovered={hovered} />
                </div>
                <div style={{ paddingTop: "32px" }}>
                    Customer Service
                    <br />
                    FAQ
                </div>
            </Link>
        </MainFooterCircle>
    );
}

export default SupportCircle;
