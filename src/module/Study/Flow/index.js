import React, { Component } from 'react';

import { Row, Col, message } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import styles from './index.less';
import { FlowToolbar } from './EditorToolbar';

import {getSidebarList, createLog, deleteLog, UpdateLog, getLog, getGrowDetail} from '../server';

class FlowDemo extends Component {
    constructor(){
        super();
        this.state = {
            linkData: {
                nodes: [],
                edges: []
              },
              fixSize:true,
        }
    }

    componentDidMount(){
        let location = this.props.history.location
        let id = location.pathname.split("w/")[1]
        this.getDetail(id)
    }

    getDetail = (id) =>{
        getGrowDetail(id).then(res=>{
            let data = res.data
            if(data.code == 200&&data.data.length>0){
                let {linkData}=data.data[0]
                this.setState({
                    linkData:JSON.parse(linkData)
                })
            }
        })
    }

    fixSize = () =>{

    let fixSize = document.querySelector(".fix-size")
    console.log(fixSize)
    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    if(this.state.fixSize){
      fixSize.dispatchEvent(evt);
    }
    this.setState({
      fixSize:false
    })
  }

    UpdateChain = (id,linkData) =>{
        UpdateLog(id,linkData).then(res=>{
            let data = res.data
            if(data.code == 200){
                message.success(data.msg)
            }
        })
    }

    render() {
        return (
            <div>
                <GGEditor className={styles.editor} className='editor'>
                    <Row type="flex" className={styles.editorHd}>
                        <Col span={24} >
                            <FlowToolbar />
                        </Col>
                    </Row>
                    <Row type="flex" className={styles.editorBd}>
                        
                        <Col span={16} className={styles.editorContent}>
                        <Flow className={styles.flow}
                        data= {this.state.linkData} 
                        onAfterChange={this.fixSize}
                        />
                        </Col>
                        
                    </Row>
                </GGEditor>
            </div>
        );
    }
}

export default FlowDemo;
