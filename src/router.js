import React from 'react'
import {Route,HashRouter} from 'react-router-dom'

import Home from './routes/Home.js'
import About from './routes/About'
import Grow from './routes/Grow'
import Amusement from './routes/Amusement'
import Help from './routes/Help'
import Reward from './routes/Reward'
import Study from './routes/Study'

const RouterConfig = ()=>{

    return (
        <HashRouter >
            <Route  path="/" exact component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/help" component={Help}/>
            <Route  path="/grow" component={Grow}/>
            <Route  path="/reward" component={Reward}/>
            <Route  path="/study" component={Study}/>
            <Route  path="/amusement" component={Amusement}/>
        </HashRouter>
    )
}
export default RouterConfig