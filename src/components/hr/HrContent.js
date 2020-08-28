import React from "react";
import { useParams } from "react-router-dom";
import HrBanner from "./HrBanner";
import Talent from "./Talent";
import Education from "./Education";
import Welfare from "./Welfare";

function HrContent() {
    const { subject } = useParams();
    return (
        <>
            <HrBanner subject={subject} />
            <HrCaseRenderer subject={subject} />
        </>
    );
}

// TODO: Redirect component 추가해야 함
function HrCaseRenderer({ subject }) {
    switch (subject) {
        case "talent":
            return <Talent />;
        case "education":
            return <Education />;
        case "welfare":
            return <Welfare />;
        default:
            return <React.Fragment />;
    }
}

export default HrContent;
