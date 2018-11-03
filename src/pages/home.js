import React, { Component } from 'react';

import List from '../components/list';
import Pagination from '../components/pagination';

class Home extends Component {
    render() {
        return (
            <div>
                <div class="top-row">
                    <h2>List of Starships</h2>
                    <input class="searchbar" type="text" value={this.props.inputValue} placeholder="Search for starships..."/>
                </div>

                <div class="main-list">
                    <div class="main-list__head">
                        <span className="main-list__data w-30">Name</span>
                        <span className="main-list__data w-30">Model</span>
                        <span className="main-list__data w-30">Class</span>
                        <span className="main-list__data w-10">Passengers</span>
                    </div>
                    <List items={this.props.starships} getDetails={this.props.getDetails} />
                </div>

                <Pagination starships={this.props.starships} starshipsCount={this.props.starshipsCount} changePage={this.props.changePage}/>
            </div>
        );
    }
}

export default Home;