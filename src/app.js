import React from 'react'
import { Home, Browse, Signup, Signin } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks/use-auth-listener'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

export default () => {
  const { user } = useAuthListener()
  return (
    <Router>
      <Switch>
        {/* Check user auth */}
        <IsUserRedirect user={user} loggedInPath='/browse' path='/signin'>
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath='/browse' path='/signup'>
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path='/browse' exact>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user={user} loggedInPath='/browse' path='/' exact>
          <Home />
        </IsUserRedirect>
        {/* End Of Check user auth */}
      </Switch>
    </Router>
  )
}
