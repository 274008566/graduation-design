import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrump from '../bread-crump';
import MainContent from './main-content';
import './index.less'
import ClickRank from '../click-rank';
import Like from '../like';


const { Footer, Sider, Content } = Layout;

export class ContentDetail extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <Layout>
                        <Content>
                            <BreadCrump/>
                            <MainContent/>
                        </Content>
                        <Sider>
                            <ClickRank/>
                            <Like/>
                        </Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                
            </div>
        );
    }
}

export default ContentDetail;
