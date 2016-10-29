import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

// Our Pages
import ClubHub from 'ClubHub'
import Editor from 'pages/Editor'
import Classic from 'templates/Classic'

// Import Styles
import './styles/main.less'

render((
<Router history={browserHistory}>
  <Route path="/" component={ClubHub}/>
  <Route path="/editor" component={Editor}/>
  <Route path="/site/classic" component={Classic}/>
</Router>
), document.getElementById('app'))
