import React, { Component } from 'react';

import List from '../components/list';
import Modal from '../components/modal';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>List of Starships</h2>
                <List items={this.props.starships} getDetails={this.props.getDetails} />

                <ul className="pagination">
                    <li id="1" onClick={this.props.changePage}>1</li>
                    <li id="2" onClick={this.props.changePage}>2</li>
                    <li id="3" onClick={this.props.changePage}>3</li>
                    <li id="4" onClick={this.props.changePage}>4</li>
                </ul>

                <Modal />
            </div>
        );
    }
}

export default Home;