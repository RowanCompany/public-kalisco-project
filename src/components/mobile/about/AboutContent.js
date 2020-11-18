import React from "react";
import { useParams } from "react-router-dom";

function AboutCaseRenderer({ subject }) {
    switch (subject) {
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