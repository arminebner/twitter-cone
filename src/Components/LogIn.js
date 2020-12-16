import React, { useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const LogIn = () => {
    const [ users, setUsers ] = useContext(UserContext)
    //console.log(users);

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
        <div className='all-users'>
          {users ?
            users.map(user => (
                <NavLink to={`/usertweets/${user.id}`}><div className='avatar'></div><div>{user.name}</div></NavLink>
            ))
            : 'loading users'}  
        </div>
    )
}

export default LogIn

