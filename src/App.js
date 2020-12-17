import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { UserProvider } from './Components/UserContext'
import SideBar from './Components/SideBar'
import LogIn from './Components/LogIn'
import UserTweets from './Components/UserTweets'
import SingleTweet from './Components/SingleTweet'
import AllTweets from './Components/AllTweets'
import './App.css';
import './Components/SideBar.css'
import './Components/LogIn.css'
import Feed from './Components/Feed';



function App() {

  return (
    <UserProvider>
      <div className="app">
        <Router>
          <div className="SideBar">
            <SideBar />
          </div>
          <Feed/>
          <div className="content">
            <Switch>
                <Route exact path="/" component={LogIn} />
                <Route exact path='/usertweets/:id' component={UserTweets}/>
                <Route exact path='/usertweets/singletweet/:tweetid' component={SingleTweet} />
                <Route exact path='/alltweets' component={AllTweets} />
            </Switch>
          </div> 
         </Router>
      </div>
    </UserProvider>
  );
}

export default App;
