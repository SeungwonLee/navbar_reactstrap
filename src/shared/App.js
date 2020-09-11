import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Tab, Footer } from 'components'
import { Intro, Work, Fun } from 'pages'

class App extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"></link>
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
