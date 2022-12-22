import React, { useEffect, useState } from "react";
import Landing from "./Pages/Landing/landing";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FAQs from "./Pages/FAQs/faqs"
import Home from './Pages/Home/Home'
import OurTeam from "./Pages/ourTeam/ourTeam"
import Settings from './Pages/settings/settings'
import ProfilePage from "./Pages/Profile Page/profilepage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import SavedPages from "./Pages/SavedPages";
import firebase from "./firebase";
import Error from "./Pages/Err/Error";
function App() {
  const [posts, setposts] = useState([])
  
  const user = firebase.auth().currentUser
  var uid = ''
  if(user){
    uid=user.uid
  }
    useEffect(() => {
        const ref = firebase.firestore().collection("AllPost").orderBy("timestamp", "desc")
        ref.onSnapshot((querySnap) => {
            const newpost = []
            querySnap.forEach(
                (doc) => {
                    newpost.push(doc.data());
                }
            )
            setposts(newpost)
        })
    }, [])
return   (posts.length !==0)?(
      <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/"><Landing/></Route>
            <Route exact path="/faqs"><FAQs/></Route>
            <Route exact path="/ourteam"><OurTeam/></Route>
        
        <PrivateRoute path='/showProfile' exact component={ProfilePage}/>
        <PrivateRoute path='/savedposts' exact component={()=><SavedPages userid={uid} posts={posts}/>}/>
        <PrivateRoute exact path ='/profile/:id'  component={()=> <ProfilePage userid={uid} pro='self' />}/>
        <PrivateRoute path='/home' exact component={()=><Home userid={uid} posts={posts}/>}/>
        
        <PrivateRoute path='/settings'exact component={()=><Settings userid ={uid}/>}/>
        <Route component={Error}/>

        <PrivateRoute path='/savedposts' exact component={()=><SavedPages posts={posts}/>}/>
        <PrivateRoute path='/MyProfile' exact component={()=><ProfilePage  pro='self'/>}/>
        <Route path ='/Post' exact component={Post}/>
        <PrivateRoute path='/home' exact component={()=><Home posts={posts}/>}/>
          </Switch>
        </Router>
        </AuthProvider>
      </div>
    ):(<div className='preloader'>
    <div className="loader">
        <div className="spin reel">
          <span className="dot d_top" />
          <span className="dot d_right" />
          <span className="dot d_center" />
          <span className="dot d_left" />
          <span className="dot d_bottom" />
        </div>
      </div>
    </div>)   
}

export default App;
