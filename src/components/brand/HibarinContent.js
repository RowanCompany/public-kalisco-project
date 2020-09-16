import React from "react";
import HibarinBanner from "./HibarinBanner";
import { useParams, Redirect } from "react-router-dom";
import Footer from "../Footer";
import HibarinStory from "./HibarinStory";
import HibarinStore from "./HibarinStore";
import HibarinMenu from "./HibarinMenu";
import Fab from "./fab/Fab";

function HibarinContent() {
    const { subject } = useParams();
    return (
        <>
            <HibarinBanner subject={subject} />
            <HibarinCaseRenderer subject={subject} />
            <Footer />
            <Fab subject="hibarin" />
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
            return <Redirect to="/supports/partnership" />;
        case "store":
            return <HibarinStore />;
        case "news-and-events":
            return <Redirect to="/supports/events?type=hibarin" />;
        default:
            return <Redirect to="/brand/hibarin/story" />;
    }
}

export default HibarinContent;
