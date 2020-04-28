import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrump from '../bread-crump';
import MainContent from './main-content';
import './index.less'
import Article from '../commend-article/index'
import Like from '../like';
import axios from "axios"; //导入axios
import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';


import {getGrowDetail} from '../../module/Grow/server'
import {getArticleDetail} from '../../module/Home/server'
import {updataArticle} from '../../module/Home/server'


const { Sider, Content } = Layout;

export class ContentDetail extends Component {
    constructor(){
        super();
        this.state = {
            detail:[],
            dataTxt:'',
            showRotate:false
        }
    }

    updataArticle = (id,num)=>{
        num =parseInt(num)
        updataArticle(id,{click_num:num+1})
    }

    componentDidMount(){
        let location = this.props.history.location
        let {pathname, search}=location

        let id = pathname.split('detail/')[1]
        
        let type = search.split("=")[1]
        this.setState({type})
        this.setState({
            showRotate:true
        })
        if(type=='grow'){
            getGrowDetail(id).then(res=>{
                let data = res.data
                this.setState({
                    showRotate:false
                })
                if(data.code==200){
                    this.setState({
                        detail:data.data
                    })
                    let content = data.data[0].content
                    let url = content.split('3001')[1]
                    axios(url).then(res=>{
                        let data = res.data
                        this.setState({dataTxt:data})
                    })
                }
            })
        }else{
            getArticleDetail(id).then(res=>{
                let data = res.data
                this.setState({
                    showRotate:false
                })
                if(data.code==200){
                    this.setState({
                        detail:data.data
                    })
                    let content = data.data[0].content
                    let url = content.split('3001')[1]
                    this.updataArticle(id,data.data[0].click_num);

                    axios(url).then(res=>{
                        let data = res.data
                        this.setState({dataTxt:data})
                    })
                }
            })
        }
    }
    render() {
        let {detail, type, dataTxt}=this.state
        return (
            <div className="container">
                <Layout>
                    <Layout>
                        <Content>
                            <BreadCrump type={type}/>
                            <MainContent detail={detail}  type={type} dataTxt={dataTxt}/>
                        </Content>
                        <Sider>
                            <Article/>
                            <Like/>
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

export default ContentDetail;
