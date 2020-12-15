import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import SideBar from './Components/SideBar'
import LogIn from './Components/LogIn'
import UserTweets from './Components/UserTweets'
import SingleTweet from './Components/SingleTweet'
import './App.css';
import './Components/SideBar.css'
import './Components/LogIn.css'


function App() {

  const [ users, setUsers ] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // handle success
      //console.log(response.data);
      setUsers(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [])


  return (
    <div className="App">
      <Router>
        <div className="SideBar">
          <SideBar />
        </div>
        <div className="content">
          <Switch>
              <Route exact path="/">
                <LogIn users={users} />
                </Route> 
              <Route exact path='/usertweets/:id'>
                <UserTweets users={users} />
              </Route>
              <Route exact path='/usertweets/singletweet/:title' component={SingleTweet} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
