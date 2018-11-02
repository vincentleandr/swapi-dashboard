import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className={"modal " + this.props.modalOpen}>
                <div className="modal__box">
                    <p>{this.props.pilotsDetails}</p>
                </div>
            </div>
        );
    }
}

export default Modal;