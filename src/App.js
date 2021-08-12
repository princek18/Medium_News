import './App.css';
import 'antd/dist/antd.css';
import Footer from "./Components/Footer/Footer"
import Header from './Components/Header/Header';
import Main from "./Components/Main/Main";
import GetStarted from './DummyComponents/GetStarted';
import Member from './DummyComponents/Member';
import SignIn from './DummyComponents/SignIn';
import Story from './DummyComponents/Story';
import Write from './DummyComponents/Write';
import Artical from './Components/Artical/Artical';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/getstarted" component={GetStarted}/>
        <Route path="/member" component={Member}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/story" component={Story}/>
        <Route path="/write" component={Write}/>
        <Route path="/artical" component={Artical}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
