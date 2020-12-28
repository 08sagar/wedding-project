import React,{Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
const App=()=>
{
  return(
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path ="/aboutus" component={About}/>
          <Route path ="/contact" component={Contact}/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App