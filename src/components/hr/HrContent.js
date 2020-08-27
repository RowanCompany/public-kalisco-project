import React from "react";
import { useParams } from "react-router-dom";
import HrBanner from "./HrBanner";

function HrContent() {
    const { subject } = useParams();
    return (
        <>
            <HrBanner subject={subject} />
            <HrCaseRenderer subject={subject} />
        </>
    );
}

function HrCaseRenderer({ subject }) {
    switch (subject) {
        case "talent":
            return <div>hi</div>;
        case "education":
            return <div>hi</div>;
        case "welfare":
            return <div>hi</div>;
        default:
            return <></>;
    }
}

export default HrContent;
