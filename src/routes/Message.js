import React, { Component } from 'react';
import { Markdown } from 'react-showdown2';


export class Message extends Component {
    render() {
        var markdown = '## Hello\n\nMore content...';
        return (
            <div className="message">
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
