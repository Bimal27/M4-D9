import './App.css'
import MyNavBar from './component/MyNavBar'
import IAmFooter from './component/MyFooter'
import WelcomeMessage from './component/Welcome'
import NewRelease from './component/LatestRelease'


function App() {
  return (
    <div>
      <MyNavBar />
      <WelcomeMessage />
      <NewRelease />
      <IAmFooter />
    </div>
  );
}

export default App;
