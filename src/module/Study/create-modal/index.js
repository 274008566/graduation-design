import React, { Component } from 'react';
import Modal from 'bee-modal';
import 'bee-modal/build/Modal.css';
import Button from "bee-button"
import 'bee-button/build/Button.css';

export class CreateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    close = ()=> {
        this.props.showModal(false)()
    }
    open = ()=> {
        this.setState({
            showModal: true
        });
    }
    render() {
        return (
            <div>
                <Modal
                    show = { this.props.show }
                    onHide = { this.close } >
                        <Modal.Header closeButton >
                            <Modal.Title>标题</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={ this.close} colors="secondary" style={{marginRight: 8}}>取消</Button>
                            <Button onClick={ this.close } bordered>确认</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CreateModal;
