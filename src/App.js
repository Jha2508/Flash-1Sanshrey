import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/sidebar/sidebar';
import Home from './Pages/Home/Home';
import Settings from './Pages/settings/settings';
function App() {
  return (
    <div className="App">
    
    <Router><Sidebar/><Switch>
      <Route path='/settings' exact component={Settings}/>
      
      <Route path='/' exact component={Home}/>
      
    </Switch></Router>
     
    </div>
  );
}

export default App;
