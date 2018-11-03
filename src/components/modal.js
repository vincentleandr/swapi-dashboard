import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className={"modal " + this.props.modalOpen}>
                <div className="modal__box">
                    <button className="btn-close" type="button" onClick={this.props.closeModal}>&times;</button>

                    <h3>{this.props.pilotsDetails.name}</h3>

                    <div class="details-data">
                        <span class="label">Height</span>
                        <span>{this.props.pilotsDetails.height}</span>
                    </div>

                    <div class="details-data">
                        <span class="label">Gender</span>
                        <span>{this.props.pilotsDetails.gender}</span>
                    </div>

                    

                </div>
            </div>
        );
    }
}

export default Modal;