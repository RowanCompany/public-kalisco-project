import React from "react";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Supports from "./pages/supports/Supports";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// TODO: Suspense 도입 고려, Nested Route 처리해야 함
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/supports" component={Supports} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
