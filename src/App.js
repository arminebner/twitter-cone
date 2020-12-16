import React, { useContext } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { UserProvider } from './Components/UserContext'
import UserContext from './Components/UserContext'
import SideBar from './Components/SideBar'
import LogIn from './Components/LogIn'
import UserTweets from './Components/UserTweets'
import SingleTweet from './Components/SingleTweet'
import './App.css';
import './Components/SideBar.css'
import './Components/LogIn.css'


function App() {

  return (
    <UserProvider>
      <div className="App">
        <Router>
          <div className="SideBar">
            <SideBar />
          </div>
          <div className="content">
            <Switch>
                <Route exact path="/" component={LogIn} />
                <Route exact path='/usertweets/:id' component={UserTweets}/>
                <Route exact path='/usertweets/singletweet/:title' component={SingleTweet} />
            </Switch>
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
