import React from 'react'
import { NavLink } from 'react-router-dom'

const LogIn = ({users}) => {
    //console.log(users);

    //state for user for sidebar (pass as prop, lift state to app.js or use context)
    //maybe context would be the best fit bc of filter-function
    
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

