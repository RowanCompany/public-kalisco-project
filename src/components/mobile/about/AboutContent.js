import React from "react";
import { useParams } from "react-router-dom";

import AboutBusiness from "./AboutBusiness";

function AboutCaseRenderer({ subject }) {
    switch (subject) {
        case "business":
            return <AboutBusiness />;
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