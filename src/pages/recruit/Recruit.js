import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/Footer";
import RecruitComponent from "../../components/recruit/Recruit";
import Fab from "../../components/brand/fab/Fab";

function Recruit() {
    return (
        <>
            <Nav />
            <RecruitComponent />
            <Footer />
            <Fab />
        </>
    );
}

export default Recruit;
