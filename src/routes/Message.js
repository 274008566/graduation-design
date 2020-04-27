import React, { Component } from 'react';
import { Markdown } from 'react-showdown2';
import Title from '../components/Title/index'



export class Message extends Component {
    render() {
        var markdown = '## Hello\n\nMore content...';
        return (
            <div className="message">
                <Title name='留言板' href="#/message"/>
                
                <div className="title">
                    <h1 >留言板</h1>
                    <span className="title1">海内存知己，天涯若比邻。</span>
                    <Markdown markup={ markdown } />
                    
                </div>
            </div>
        );
    }
}

export default Message;
