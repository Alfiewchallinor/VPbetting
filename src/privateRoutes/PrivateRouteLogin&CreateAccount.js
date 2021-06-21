import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'

export default function PrivateRouteLoginAndCreateAccount({ component: Component, ...rest}) {
    const { currentUser } = useAuth()
    return (
        <Route
        {...rest}
        render={props => {
          return  currentUser ?  <Redirect to="/" />: 
          <Component {...props} />
            

        }}>
        </Route>
    )
}