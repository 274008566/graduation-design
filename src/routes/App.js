import React, { Component } from 'react';
import Menu from '../components/Menu/index'
import RouterConfig from '../router'

export class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <RouterConfig/>
            </div>
        );
    }
}

export default App;
