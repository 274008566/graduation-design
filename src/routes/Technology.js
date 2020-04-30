import React, { Component } from 'react';
import { Layout } from 'antd';
import 'bee-layout/build/Layout.css';
import NewPublish from '../module/Home/new-publish';
import ClickRank from '../components/click-rank'
import { Article } from '../components/commend-article';
import Title from '../components/Title/index'
import {getArticleDetail, getArticleList} from '../module/Home/server'
import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';

const { Sider, Content } = Layout;

export class Technology extends Component {
    constructor(){
        super()
        this.state ={
            ArticleList:[]
        }
    }

    componentDidMount(){
        this.setState({
            showRotate:true
        })
        getArticleList().then(res=>{
            let data = res.data
            this.setState({
                showRotate:false
            })
            if(data.code==200){
                this.setState({
                    ArticleList:data.data
                })
            }
        })
    }
    render() {
        let {ArticleList}=this.state
        let NewPublishList = ArticleList.filter(item=>item.sort_id=="technology")
        return (
            <div className="container">
                <div style={{marginBottom:20}}>
                    <Title name='技术分享' href="#/technology"/>

                </div>
                <Layout>
                <Layout>
                    <Content>
                        <NewPublish NewPublishList={NewPublishList} typeName="技术分享"/>
                    </Content>
                    <Sider>
                        <ClickRank/>
                        <Article/>
                    </Sider>
                </Layout>
                </Layout>
                <Loading
                    fullScreen
                    showBackDrop={true}
                    show={this.state.showRotate}
                />
            </div>
        );
    }
}

export default Technology;
