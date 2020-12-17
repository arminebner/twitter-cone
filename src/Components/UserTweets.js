import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios'
import './UserTweets.css'

const UserTweeds = ({users}) => {
    //console.log(users);
    const { id } = useParams()
    //console.log(id);
    
    const sortTweedsPerId = (data) => {
        //console.log(data);
        let filteredData = data.filter(item => item.userId === parseInt(id))
        //console.log(filteredData);
        setUserTweets(filteredData)
    }

    const [ userTweets, setUserTweets ] = useState()
    //in worst case move this state for tweets in app.js as well or make another api call in the single depending on the api-design
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          //console.log(response.data);
          //setUserTweets(response.data)
            sortTweedsPerId(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }, [])
    
    return (
        <div className='user-tweets'>
            {userTweets ?
                userTweets.map(tweet => (
                    /*onClick function to set currentUser in context to get used in sidebar*/
                    <NavLink to={`/usertweets/singletweet/${tweet.id}`}><div className='usertweets-title'>{tweet.title} </div></NavLink>

                ))
            : 'loading tweets'
            }
        </div>
    )
}

export default UserTweeds
