import React from "react";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Supports from "./pages/supports/Supports";
import HR from "./pages/hr/HR";
import Brand from "./pages/brand/Brand";
import Product from "./pages/product/Product";
import Recruit from "./pages/recruit/Recruit";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Notice from "./pages/contact/Notice";
import Faq from "./pages/contact/Faq";

// TODO: Suspense 도입 고려
function App() {
    return (
        <BrowserRouter forceRefresh={true}>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/supports" component={Supports} />
                <Route path="/recruit" component={Recruit} />
                <Route path="/hr" component={HR} />
                <Route path="/brand" component={Brand} />
                <Route path="/products" component={Product} />
                <Route path="/contact" component={Contact} />
                <Route path="/faq" component={Faq} />
                <Route path="/notices" component={Notice} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
