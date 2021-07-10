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
import firebase from './firebase' 
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  const user = firebase.auth().currentUser;

  return (
    <div className='App'>
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/"><Landing/></Route>
          <Route exact path="/faqs"><FAQs/></Route>
          <Route exact path="/ourteam"><OurTeam/></Route>
      <Route path='/settings' exact component={Settings}/>
      
      <Route path='/MyProfile' exact component={()=><ProfilePage uid={user.uid} buttonstat={{display:'none'}}/>}/>
      <Route path ='/Post' exact component={Post}/>
      <PrivateRoute path='/home' exact component={Home}/>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
