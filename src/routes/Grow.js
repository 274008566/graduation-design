import React, { Component } from 'react';

import GrowTabs from '../module/Grow/Tabs'
import Title from '../components/Title/index'


export class Grow extends Component {
    render() {
        return (
            <div className="grow">
                <Title name='成长' href="#/grow"/>
                <GrowTabs/>
            </div>
        );
    }
}

export default Grow;
