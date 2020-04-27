import React, { Component } from 'react';
import { Layout } from 'antd';
import 'bee-layout/build/Layout.css';
import NewPublish from '../module/Home/new-publish';
import ClickRank from '../components/click-rank'
import { Article } from '../components/commend-article';
import Title from '../components/Title/index'


const { Footer, Sider, Content } = Layout;

export class Technology extends Component {
    render() {
        return (
            <div className="container">
                <div style={{marginBottom:20}}>
                    <Title name='技术分享' href="#/technology"/>

                </div>
                <Layout>
                <Layout>
                    <Content>
                        <NewPublish/>
                    </Content>
                    <Sider>
                        <ClickRank/>
                        <Article/>
                    </Sider>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
                
            </div>
        );
    }
}

export default Technology;
