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
          setUsers(response.data.map((user, index) => ({
            ...user,
            picture: `https://randomuser.me/api/portraits/${index % 2 === 1 ? 'men' : 'women'}/${index}.jpg`
          })))
          
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
                <NavLink to={`/usertweets/${user.id}`}>
                  <div className='user-container'>
                  <div className='avatar'> 
                  <img className ='avatar' src={user.picture} alt={user.name} />
                  </div>

                  <div>{user.name}</div></div></NavLink>
            ))
            : 'loading users'}  
        </div>
    )
}

export default LogIn

