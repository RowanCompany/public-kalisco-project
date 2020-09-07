import React from "react";
import SabotenBanner from "./SabotenBanner";
import SabotenStore from "./SabotenStore";
import { useParams, Redirect } from "react-router-dom";
import Footer from "../Footer";
import SabotenMenu from "./SabotenMenu";

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
            return <SabotenMenu subject={subject} />;
        case "gift-card":
            return <Redirect to="/brand/saboten/story" />;
        case "store":
            return <SabotenStore />;
        case "news-and-events":
            return <Redirect to="/brand/saboten/story" />;
        default:
            return <Redirect to="/brand/saboten/story" />;
    }
}

export default SabotenContent;
