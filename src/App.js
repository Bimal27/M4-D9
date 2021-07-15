import './App.css'
import MyNavBar from './component/MyNavBar'
import IAmFooter from './component/MyFooter'
import WelcomeMessage from './component/Welcome'
import NewRelease from './component/LatestRelease'
import Registration from './component/Registration'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    
    <div>
      
      <Router>
      <MyNavBar />
      
      <WelcomeMessage />
     
      
      <Route path="/registrations" exact component={Registration} />
      
      </Router>
      <NewRelease />
      <IAmFooter />
      
  
    </div>
   
  );
}

export default App;
