import React, { Component } from 'react';
import Carousel from '../components/Carousel/index'
import { Layout } from 'antd';
import Recommend from '../module/Home/recommend/index'
import NewPublish from '../module/Home/new-publish';
// import HotTag from '../components/hot-tag';
import ClickRank from '../components/click-rank'
import {Like} from '../components/like/index'
import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';


import {getArticleDetail, getArticleList} from '../module/Home/server'

const { Header,  Sider, Content } = Layout;

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            ArticleList:[],
            showRotate:false
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
        let RecommendList = ArticleList.filter(item=>item.sort_id=="recommend")
        let NewPublishList = ArticleList.filter(item=>item.sort_id=="new")
        return (
            <div className="container">
                <Layout>
                <Header><Carousel/></Header>
                <Layout>
                    <Content>
                        <Recommend RecommendList={RecommendList}/>
                        <NewPublish NewPublishList={NewPublishList}typeName="最新推荐"/>
                    </Content>
                    <Sider>
                        <ClickRank/>
                        <Like/>
                        {/* <HotTag/> */}
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

export default Home;
