import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [ users, setUsers ] = useState([])
    return (
        <UserContext.Provider value={[users,  setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}
