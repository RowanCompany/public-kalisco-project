import React from "react";
import HibarinBanner from "./HibarinBanner";
import { useParams, Redirect } from "react-router-dom";
import Footer from "../Footer";
import HibarinStory from "./HibarinStory";
import HibarinStore from "./HibarinStore";
import HibarinMenu from "./HibarinMenu";

function HibarinContent() {
    const { subject } = useParams();
    return (
        <>
            <HibarinBanner subject={subject} />
            <HibarinCaseRenderer subject={subject} />
            <Footer />
        </>
    );
}

function HibarinCaseRenderer({ subject }) {
    switch (subject) {
        case "story":
            return <HibarinStory />;
        case "menu":
            return <HibarinMenu subject={subject} />;
        case "gift-card":
            return <Redirect to="/brand/hibarin/story" />;
        case "store":
            return <HibarinStore />;
        case "news-and-events":
            return <Redirect to="/brand/hibarin/story" />;
        default:
            return <Redirect to="/brand/hibarin/story" />;
    }
}

export default HibarinContent;
