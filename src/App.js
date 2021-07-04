import React from "react";
import Landing from "./Pages/Landing/landing";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FAQs from "./Pages/FAQs/faqs"
import Home from './Pages/Home/Home'
import OurTeam from "./Pages/ourTeam/ourTeam"
import Settings from './Pages/settings/settings'
import ProfilePage from "./Pages/Profile Page/profilepage";
import Post from "./Components/Post/Post";


function App() {
  return (
    <div className='App'>
    
      <Router>
        <Switch>
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/faqs"><FAQs/></Route>
          <Route exact path="/ourteam"><OurTeam/></Route>
      <Route path='/settings' exact component={Settings}/>
      
      <Route path='/MyProfile' exact component={ProfilePage}/>
      <Route path ='/Post' exact component={Post}/>
      <Route path='/home' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
