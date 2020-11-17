import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../../components/mobile/nav/MobileNav";
import Footer from "../../components/mobile/footer/Footer";
import SupportContent from "../../components/mobile/support/Support";
import SupportDetailContent from "../../components/mobile/support/SupportContent";  


function Support({ match }) {    
    return (
        <>
            <Nav />
            <Switch>
                <Route
                    path={`${match.path}/:subject`}                    
                    component={SupportDetailContent}
                />
                <Route path={match.path} component={SupportContent} />
            </Switch>
            <Footer />
        </>        
    );
}
  
export default Support;