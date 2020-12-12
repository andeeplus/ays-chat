import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChatRoom from '../ChatRoom/ChatRoom'
import Home from '../Home/Home'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:roomId" component={ChatRoom} />
    </Switch>
  )
}

export default Routes
