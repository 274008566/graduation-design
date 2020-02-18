import React, { Component } from 'react';
import Carousel from '../components/Carousel/index'
import { Layout } from 'antd';
import Recommend from '../module/Home/recommend/index'

const { Header, Footer, Sider, Content } = Layout;

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                <Header><Carousel/></Header>
                <Layout>
                    <Content>
                        <Recommend/>
                    </Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
                
            </div>
        );
    }
}

export default Home;
