import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Details extends Component {
    createPilotList = pilot => {
        return (
            <li className="list" key={pilot.name}>
                <a href="javascript:;" data-name={pilot.name} onClick={this.props.openModal}>{pilot.name}</a>
            </li>
        );
    }

    render() {
        const toMapPilots = this.props.pilots;
        const listPilots = toMapPilots.map(this.createPilotList);

        return (
            <div>
                <NavLink to="/">&lt; Back to starships list</NavLink>
                <h3>{this.props.details.name}</h3>

                <div class="details-data">
                    <span class="label">Model</span>
                    <span>{this.props.details.model}</span>
                </div>

                <div class="details-data">
                    <span class="label">Class</span>
                    <span>{this.props.details.starship_class}</span>
                </div>

                <div class="details-data">
                    <span class="label">Manufacturer</span>
                    <span>{this.props.details.manufacturer}</span>
                </div>

                <div class="details-data">
                    <span class="label">Pilots</span>
                    <ul>
                        {listPilots}
                    </ul>
                </div>

                <div class="details-data">
                    <span class="label">Crew</span>
                    <span>{this.props.details.crew}</span>
                </div>

                <div class="details-data">
                    <span class="label">Passengers</span>
                    <span>{this.props.details.passengers}</span>
                </div>

                <div class="details-data">
                    <span class="label">Max Speed</span>
                    <span>{this.props.details.max_atmosphering_speed}</span>
                </div>

                <div class="details-data">
                    <span class="label">Hyperdrive Rating</span>
                    <span>{this.props.details.hyperdrive_rating}</span>
                </div>

                <div class="details-data">
                    <span class="label">Cost</span>
                    <span>{this.props.details.cost_in_credits}</span>
                </div>

                

                
            </div>
        );
    }
}

export default Details;