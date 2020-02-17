import React, { Component } from 'react';
import { Layout } from 'antd';

const {  Footer, Sider, Content } = Layout;

export class HomeContent extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default HomeContent;
