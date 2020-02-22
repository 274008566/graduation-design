import React, { Component } from 'react';
import Carousel from '../components/Carousel/index'
import { Layout } from 'antd';
import Recommend from '../module/Home/recommend/index'
import NewPublish from '../module/Home/new-publish';
import HotTag from '../components/hot-tag';
import ClickRank from '../components/click-rank'
import { Article } from '../components/commend-article';

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
                        <NewPublish/>
                    </Content>
                    <Sider>
                        <ClickRank/>
                        <Article/>
                        <HotTag/>
                    </Sider>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
                
            </div>
        );
    }
}

export default Home;
