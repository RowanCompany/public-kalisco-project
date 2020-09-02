import React from "react";
import HibarinBanner from "./HibarinBanner";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import HibarinStory from "./HibarinStory";

// TODO: CaseRenderer 만들어야 함
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

// TODO: Redirect 컴포넌트 추가해야 함
function HibarinCaseRenderer({ subject }) {
    switch (subject) {
        case "story":
            return <HibarinStory />;
        case "menu":
            return <div>hi</div>;
        case "gift-card":
            return <div>hi</div>;
        case "store":
            return <div>hi</div>;
        case "news-and-events":
            return <div>hi</div>;
        default:
            return <React.Fragment />;
    }
}

export default HibarinContent;
