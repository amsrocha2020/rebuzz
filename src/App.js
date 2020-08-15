import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import EndUser from "./Pages/EndUser";
import SubFooter from "./components/SubFooter";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/eula" component={EndUser} />
      <Route path="/terms-of-service" component={Terms} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/contact" component={Contact} />
      <SubFooter />
    </BrowserRouter>
  );
}

export default App;
