import React, { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Supports from "./pages/supports/Supports";
import HR from "./pages/hr/HR";
import Brand from "./pages/brand/Brand";
import Product from "./pages/product/Product";
import Recruit from "./pages/recruit/Recruit";
import Mail from "./pages/mail/Mail";
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Notice from "./pages/contact/Notice";
import Faq from "./pages/contact/Faq";
import AdminLogin from "./components/login/admin/AdminLogin";
import Login from "./pages/login/Login";
import Agreement from "./pages/register/Agreement";
import RegisterPage from "./pages/register/Register";
import FinalRegister from "./pages/register/FinalRegister";

// TODO: Suspense 도입 고려

function App() {
  useEffect(() => {
    const pathname = window.location.pathname;
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const encodeData = params.get("EncodeData");
    if (pathname !== "/register/final" && pathname !== "/register") {
      window.sessionStorage.removeItem("tempRegisterCellphoneData");
    } else if (!encodeData && pathname === "/register") {
      window.sessionStorage.removeItem("tempRegisterCellphoneData");
    }
  }, []);

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
        <Route path="/mail" component={Mail} />
        <Route path="/faq" component={Faq} />
        <Route path="/notices" component={Notice} />
        <Route path="/agreement" component={Agreement} />
        <Route path="/register/final" component={FinalRegister} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
