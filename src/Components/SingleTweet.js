import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './SingleTweet.css'

const SingleTweet = () => {

    const { tweetid } = useParams()

    const sortTweedsPerId = (data) => {
        //console.log(data);
        let filteredData = data.filter(item => item.id === parseInt(tweetid))
        //console.log(filteredData);
        setSingleTweet(filteredData)
    }

    const [ singleTweet, setSingleTweet ] = useState([])
    //in worst case move this state for tweets in app.js as well or make another api call in the single depending on the api-design
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
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
        <div className='single-tweet'>
            {singleTweet ?
                singleTweet.map(tweet => (
                    <>
                    <h2>{tweet.title}</h2>
                    <p>{tweet.body}</p>
                    </>
                ))
            : 'loading tweets'
            }
        </div>
    )
}

export default SingleTweet
