import {Route, Switch} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'

import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'

import NotFoundRoute from './components/NotFoundRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/" component={HomeRoute} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <Route path="/not-found" component={NotFoundRoute} />
    <Route component={NotFoundRoute} />
  </Switch>
)

export default App
