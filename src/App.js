import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/sidebar/sidebar';
import Home from './Pages/Home/Home';
import Settings from './Pages/settings/settings';
import {Friendlist} from './Components/right-side-bar/friendslist';
import Chatlist from './Components/right-side-bar/chatlist';
import './Components/right-side-bar/chatlist.css';
function App() {
  return (
    <div className="App">
    
    <Router><Sidebar/><Switch>
      <Route path='/settings' exact component={Settings}/>
      
      <Route path='/' exact component={Home}/>
      
    </Switch></Router>
   <div className="chatbox">
   {Friendlist.map(Chatlist)}
   </div>
     
    </div>
  );
}

export default App;
