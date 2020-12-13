import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import ChatRoom from '../views/ChatRoom'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:roomId" component={ChatRoom} />
    </Switch>
  )
}

export default Routes
