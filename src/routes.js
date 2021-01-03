import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/home'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen}/>
    </Switch>
)

export default Routes