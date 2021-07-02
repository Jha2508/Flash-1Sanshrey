import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/sidebar/sidebar';
import Settings from './pages/settings/settings';
function App() {
  return (
    <div className="App">
    
    <Router><Switch>
      <Route path='/settings' exact component={Settings}/>
      <Sidebar/>
    </Switch></Router>
     
    </div>
  );
}

export default App;
