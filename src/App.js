import React from "react";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
