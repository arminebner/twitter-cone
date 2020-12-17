import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './AllTweets.css'

const AllTweets = () => {

    const [ allTweets, setAllTweets ] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          //console.log(response.data);
          setAllTweets(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }, [])

    return (
        <div className='all-tweets'>
            {allTweets ?
                allTweets.map(tweet => (
                    <>
                    <h2>{tweet.title} </h2>
                    <div>{tweet.body}</div>
                    </>
                ))
            : 'loading tweets'
            }
        </div>
    )
}

export default AllTweets
