import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import WhoPage from "./pages/whopage/whopage.component";
import HowPage from "./pages/howpage/howpage.component";
import Footer from "./components/footer/footer.component";
import ContactPage from "./pages/contactpage/contactpage.component";

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
