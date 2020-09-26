import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Tab from '../components/Tab'
import Footer from '../components/fFooter'
import Intro from '../pages/Intro'
import Work from '../pages/Work'
import Fun from '../pages/Fun'

class App extends Component {
  render() {
    return (
      <div>
        <Tab />
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route exact path='/works' component={Work} />
          <Route exact path='/fun' component={Fun} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
