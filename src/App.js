import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Login } from "./Pages/Login";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Search from "./Pages/Seach";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Details from "./Pages/Details";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/404";
import Base from "./Components/Footer";
import Breadcrumbs from "./Components/Breadcrumbs";
import ScrollToTop from "./Components/ScrollToTop";
import { GlobalStyle } from "./Global/Global";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Helmet
        titleTemplate="%s - Casca Grossa Store" defaultTitle="Casca Grossa">
        <meta name="description" content="React.js application" />
      </Helmet>
      <Header />
      <Breadcrumbs />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search/:id?" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/details" exact component={Details} />
        <Route component={Page404} />
      </Switch>
      <Base />
    </Router>
  );
}

export default App;
