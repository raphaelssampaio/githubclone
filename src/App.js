import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './screen/Main'
import Repos from './screen/Repos'

export default function src() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:repos" component={Repos} />
        </Switch>
      </div>
    </Router>
  )
}
