import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Header />
      <Footer />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/who" />

      </Switch>
    </div>
  );
}

export default App;
