import React, { useState } from 'react'
import { useEffect } from 'react'
import UserContext from './userContext'

const UserContextWrapper = ({ children }) => {
  const [user, setUser] = useState({ name: '' })

  const setUsername = (name) => {
    setUser({ name })
  }

  const context = {
    user,
    setUser,
    setUsername,
    username: user.name,
  }

  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserContextWrapper
