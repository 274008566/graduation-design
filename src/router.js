import React from 'react'
import {Route,HashRouter} from 'react-router-dom'

import Home from './routes/Home.js'
import About from './routes/About'
import Grow from './routes/Grow'
import Technology from './routes/Technology'
import Help from './routes/Help'
import Message from './routes/Message'
import Study from './routes/Study'
import ContentDetail from './components/content-detail/index'
import ScrollToTop from './components/scroll-top'
import Flow from './module/Study/Flow/index'

const RouterConfig = ()=>{

    return (
        <HashRouter >
            <ScrollToTop>
                <Route  path="/" exact component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/help" component={Help}/>
                <Route  path="/grow" component={Grow}/>
                <Route  path="/message" component={Message}/>
                <Route  path="/study" component={Study}/>
                <Route  path="/technology" component={Technology}/>
                <Route  path="/home/detail/:id" component={ContentDetail}/>
                <Route  path="/flow/:id" component={Flow}/>
            </ScrollToTop>
        </HashRouter>
    )
}
export default RouterConfig