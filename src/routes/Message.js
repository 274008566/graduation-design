import React, { Component } from 'react';
import Title from '../components/Title/index'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import { ContentUtils } from 'braft-utils'
import 'braft-editor/dist/output.css'
import Button from "bee-button"
import 'bee-button/build/Button.css';
import { Comment, Tag,} from 'antd'
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';
import {getSidebarList, createMessage} from './server'
import Message from 'bee-message';
import 'bee-message/build/Message.css';
import FormControl from 'bee-form-control';
import 'bee-form-control/build/FormControl.css';

function createMarkup(html) {
    return { __html: html };
}

export class MessageDome extends Component {
    constructor(){
        super()
        this.state = {
            editorState: BraftEditor.createEditorState(null),   //留言内容
            isShowEditor:false,
            MessageList:[],
            name:''
        }
    }

    getMessageList = () =>{
        getSidebarList().then(res=>{
            let data = res.data
            if(data.code==200){
                this.setState({
                    MessageList:data.data
                })
            }
        })
    }

    onLike = () => ()=>{
        Message.destroy();
        Message.create({content: '暂不支持该功能。', color: 'warning'});
    }

    /**
     * 留言输入框的onChange
     */
    handleMessageChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    componentDidMount(){
        this.getMessageList()
    }

   
    /**
     * 清空留言框
     */
    clearContent = () => {
        this.setState({
            editorState: ContentUtils.clear(this.state.editorState)
        })
    }

    renderActions = (item) => {
        let actions = [
            <span>
                    {item.createdAt}
            </span>,
            <span onClick={this.onLike()} style={{cursor:'pointer'}}>
                    <span >
                    <Icon type="uf-heart-o" />&nbsp;赞
                    </span>
            </span>,
            <span onClick={this.onLike()} style={{cursor:'pointer'}}>
                    <span >
                        <Icon type="uf-bubble-o" />&nbsp;回复
                   </span>
            </span>
        ]
        return actions
    }

    onChange = (value) =>{
        this.setState({
            name:value
        })
    }

     /**
     * 关闭留言框
     */
    closeMessage = () => {
        this.setState({
            isShowEditor: false
        })
        this.clearContent()
    }
    
    submitContent = () => {
        const {editorState ,name}= this.state
        if (editorState.isEmpty()) {
            return
        }
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        let obj = {
            name,
            content:htmlContent
        }
        createMessage(obj).then(res=>{
            let data =res.data
            console.log(data)
            if(data.code==200){
                Message.destroy();
                Message.create({content: '发表成功。', color: 'warning'});
                this.closeMessage()
                this.getMessageList()
            }
        })
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        
        let { isShowEditor, editorState, MessageList,name}=this.state
        const controls = ['undo', 'redo', 'clear', 'separator', 'bold', 'text-color', 'blockquote', 'code', 'emoji', 'separator', 'link', 'separator']
        const hooks = {
            'toggle-link': ({ href, target }) => {
                const pattern = /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-.,@?^=%&:/~+#]*)+)?$/
                if (pattern.test(href)) {
                    return { href, target }
                }
                console.log('请输入正确的网址')
                return false
            }
        }
        return (
            <div className="message">
                <Title name='留言板' href="#/message"/>
                
                <div style={{margin:'0 20px'}}>
                     <div style={{marginTop:20}}>
                        {
                            isShowEditor ? (
                                <div style={{ marginTop: 10 }}>
                                    <div style={{marginBottom:'30px'}}>
                                            <span>姓名：</span>
                                            <FormControl 
                                            className="demo2-input" 
                                            style={{width:'30%'}}
                                            value={name} 
                                            onChange={this.onChange}/>
                                        </div>
                                    <div className="editor-wrapper">
                                        
                                        
                                        <BraftEditor
                                            controls={controls}
                                            contentStyle={{ height: 210, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                                            value={editorState}
                                            hooks={hooks}
                                            onChange={this.handleEditorChange}
                                            onSave={this.submitContent}
                                        />
                                    </div>
                                    <Button colors="success" onClick={this.submitContent}>发表</Button>&emsp;
                                <Button onClick={this.closeMessage}>取消</Button>
                                </div>
                            ) : <Button bordered style={{margin:'20px 0 0px 0px'}} onClick={() => this.setState({ isShowEditor: true })}>我要留言</Button>
                        }
                    </div>
                    <hr style={{ margin: "30px 0" }} />
                    <div style={{ width: '800px',marginLeft:'20px'}}>
                        {
                            MessageList.map((item,index)=>{
                                return(
                                    <Comment
                                        key={index}
                                        author={<span style={{ fontSize: 16 }}>{item.name} {0=== 1 && <Tag color="#87d068">管理员</Tag>}</span>}
                                        avatar={<img className='avatar-img'  alt='avatar' src={require('../assets/images/default.png')} />}
                                        content={<div className='info-box braft-output-content' dangerouslySetInnerHTML={createMarkup(item.content)} />}
                                        actions={this.renderActions(item, index)}
                                        datetime={`第${index+1}楼`}
                                    >

                                    </Comment>
                                )
                            })
                        }
                        
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MessageDome;
