import React from "react";
import Landing from "./Pages/Landing/landing";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FAQs from "./Pages/FAQs/faqs";
import OurTeam from "./Pages/ourTeam/ourTeam";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/faqs"><FAQs/></Route>
          <Route exact path="/ourteam"><OurTeam/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
