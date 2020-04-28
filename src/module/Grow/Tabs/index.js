import React, { Component } from 'react';
import Tabs from 'bee-tabs';
import 'bee-tabs/build/Tabs.css';
import './index.less'
import {getSidebarList}from '../server'
import TimeLines from '../timeLine'
const {TabPane} = Tabs;

export class GrowTabs extends Component {
    constructor(){
        super();
        this.state = {
            activeKey:"2020",
            growList:[]
        }
    }

    componentDidMount(){
        this.getSidebarList()
    }

    getSidebarList=()=>{
        let {activeKey} = this.state;
        getSidebarList(activeKey).then(res=>{
            let data = res.data.data;
            this.setState({
                growList:data
            })
        })
    }


    onChange = (activeKey) => {
        this.setState({
            activeKey,
        },()=>{
            this.getSidebarList()
        });
    }

    render() {
        return (
            <div className="demo4">
                <Tabs
                    activeKey={this.state.activeKey}
                    tabBarPosition={"left"}
                    onChange={this.onChange}
                    defaultActiveKey="1"
                    className="demo4-tabs"
                    onTabClick={this.onTabClick}
                >
                    {
                        [1,2,3,4,5,6,7,8].map((item,index)=>{
                            return (
                            <TabPane tab={2020-index} key={2020-index}>
                                <TimeLines growList={this.state.growList}/>
                            </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        );
    }
}

export default GrowTabs;
