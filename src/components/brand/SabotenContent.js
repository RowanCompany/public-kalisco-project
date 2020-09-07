import React from "react";
import SabotenBanner from "./SabotenBanner";
import SabotenStore from "./SabotenStore";
import { useParams, Redirect } from "react-router-dom";
import Footer from "../Footer";

function SabotenContent() {
    const { subject } = useParams();
    return (
        <>
            <SabotenBanner subject={subject} />
            <SabotenCaseRenderer subject={subject} />
            <Footer />
        </>
    );
}

function SabotenCaseRenderer({ subject }) {
    switch (subject) {
        case "story":
            return <></>;
        case "menu":
            //return <HibarinMenu subject={subject} />;
            return <></>;
        case "gift-card":
            return <Redirect to="/brand/hibarin/story" />;
        case "store":
            return <SabotenStore />;
        case "news-and-events":
            return <Redirect to="/brand/hibarin/story" />;
        default:
            return <Redirect to="/brand/hibarin/story" />;
    }
}

export default SabotenContent;
