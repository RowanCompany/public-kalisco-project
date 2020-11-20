import React from "react";
import { useParams } from "react-router-dom";

import AboutBusiness from "./AboutBusiness";
import AboutHistory from "./AboutHistory";

function AboutCaseRenderer({ subject }) {
    switch (subject) {
        case "business":
            return <AboutBusiness />;
        case "history":
            return <AboutHistory />;
        default:
            return <React.Fragment />;
    }
}

export default function AboutContent() {
    const { subject } = useParams();
    return (
        <>
            <AboutCaseRenderer subject={subject} />
        </>
    );
}