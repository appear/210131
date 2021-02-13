import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ResetCSS from './components/shared/reset-css'
import HomePage from './pages/home'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import SigninPage from './pages/signin'
import BoxMakerPage from './pages/box-maker'
import ErrorPage from './pages/erorr'

function App() {
  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/myinfo" component={MyInfoPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/boxmaker" component={BoxMakerPage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
