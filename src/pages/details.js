import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Details extends Component {
    createPilotList = pilot => {
        return (
            <li className="list" key={pilot.name}>
                <a href="javascript:;" data-url={pilot.url} onClick={this.props.openModal}>{pilot.name}</a>
            </li>
        );
    }

    render() {
        const toMapPilots = this.props.pilots;
        const listPilots = toMapPilots.map(this.createPilotList);

        return (
            <div>
                <NavLink to="/">Back</NavLink>
                <p>{this.props.details.name}</p>
                <p>{this.props.details.model}</p>
                <p>{this.props.details.crew}</p>

                <ul>
                    {listPilots}
                </ul>
            </div>
        );
    }
}

export default Details;