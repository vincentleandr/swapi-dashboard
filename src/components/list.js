import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class List extends Component {
    createList = item => {
        return (
            <li className="main-list__item" key={item.name}>
                <span className="main-list__data w-30">{item.name}</span>
                <span className="main-list__data w-30">{item.model}</span>
                <span className="main-list__data w-30">{item.starship_class}</span>
                <span className="main-list__data w-10">{item.passengers}</span>
                <NavLink className="divlinker" to="details" data-url={item.url} onClick={this.props.getDetails}></NavLink>
            </li>
        );
    }

    render() {
        const toMapItems = this.props.items;
        const listItems = toMapItems.map(this.createList);

        return (
            <ul className="main-list__body">
                {listItems}
            </ul>
        );
    }
}

export default List;