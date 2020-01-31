import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";
import WhoPage from "./pages/who-page/who-page.component";
import HowPage from "./pages/how-page/how-page.component";
import Footer from "./components/footer/footer.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/who" component={WhoPage} />
        <Route exact path="/how" component={HowPage} />
        <Route exact path="/contact" component={ContactPage} />

      </Switch>
      <Footer />

    </div>
  );
}

export default App;
