import React from 'react';
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
