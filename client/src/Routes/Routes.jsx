import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import ChatRoom from '../views/ChatRoom'
import Register from '../views/Register'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:roomId" component={ChatRoom} />
      <Route exact path="/invitation/:roomId" component={Register} />
    </Switch>
  )
}

export default Routes
