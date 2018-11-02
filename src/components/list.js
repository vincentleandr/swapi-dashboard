import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class List extends Component {
    createList = item => {
        return (
            <li className="list" key={item.name}>
                <NavLink to="details" data-url={item.url} onClick={this.props.getDetails}>{item.name}</NavLink>
            </li>
        );
    }

    render() {
        const toMapItems = this.props.items;
        const listItems = toMapItems.map(this.createList);

        return (
            <ul className="list">
                {listItems}
            </ul>
        );
    }
}

export default List;