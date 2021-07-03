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
      <Sidebar/>
        <Switch>
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/faqs"><FAQs/></Route>
          <Route exact path="/ourteam"><OurTeam/></Route>
      <Route path='/settings' exact component={Settings}/>
      
      <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
