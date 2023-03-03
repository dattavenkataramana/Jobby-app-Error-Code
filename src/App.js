import {Switch, Route} from 'react-router-dom'

import './App.css'

import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import JobItemDetailsRoute from './Components/JobItemDetailsRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/job/:id" component={JobItemDetailsRoute} />
  </Switch>
)
export default App
