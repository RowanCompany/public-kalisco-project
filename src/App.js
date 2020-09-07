import React from "react";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Supports from "./pages/supports/Supports";
import HR from "./pages/hr/HR";
import Brand from "./pages/brand/Brand";
import Product from "./pages/product/Product";
import Recruit from "./pages/recruit/Recruit";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// TODO: Suspense 도입 고려
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/supports" component={Supports} />
                <Route path="/recruit" component={Recruit} />
                <Route path="/hr" component={HR} />
                <Route path="/brand" component={Brand} />
                <Route path="/products" component={Product} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
