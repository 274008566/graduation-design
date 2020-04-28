import React, { Component } from 'react';
import Carousel from '../components/Carousel/index'
import { Layout } from 'antd';
import Recommend from '../module/Home/recommend/index'
import NewPublish from '../module/Home/new-publish';
import HotTag from '../components/hot-tag';
import ClickRank from '../components/click-rank'
import { Article } from '../components/commend-article';

import {getArticleDetail, getArticleList} from '../module/Home/server'

const { Header, Footer, Sider, Content } = Layout;

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            ArticleList:[]
        }
    }

    componentDidMount(){
        getArticleList().then(res=>{
            let data = res.data
            if(data.code==200){
                this.setState({
                    ArticleList:data.data
                })
            }
        })
    }

    render() {
        let {ArticleList}=this.state
        let RecommendList = ArticleList.filter(item=>item.sort_id=="recommend")
        let NewPublishList = ArticleList.filter(item=>item.sort_id=="new")
        return (
            <div className="container">
                <Layout>
                <Header><Carousel/></Header>
                <Layout>
                    <Content>
                        <Recommend RecommendList={RecommendList}/>
                        <NewPublish NewPublishList={NewPublishList}/>
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
