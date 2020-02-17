import React, { Component } from 'react';
import Carousel from '../components/Carousel/index'
import Content from '../module/Home/content/index'

export class Home extends Component {
    render() {
        return (
            <div className="banner">
                <Carousel/>
                <Content/>
            </div>
        );
    }
}

export default Home;
