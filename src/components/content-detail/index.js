import React, { Component } from 'react';
import { Layout } from 'antd';
import BreadCrump from '../bread-crump';
import MainContent from './main-content';
import './index.less'
import ClickRank from '../click-rank';
import Like from '../like';
import axios from "axios"; //导入axios


import {getGrowDetail} from '../../module/Grow/server'


const { Footer, Sider, Content } = Layout;

export class ContentDetail extends Component {
    constructor(){
        super();
        this.state = {
            detail:[],
            dataTxt:''
        }
    }

    componentDidMount(){
        let location = this.props.history.location
        let {pathname, search}=location

        let id = pathname.split('detail/')[1]
        let type = search.split("=")[1]
        this.setState({type})
        if(type=='grow'){
            getGrowDetail(id).then(res=>{
                let data = res.data
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
