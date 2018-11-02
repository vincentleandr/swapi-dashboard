import React, { Component } from 'react';
import './styles/style.min.css';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
			starships: []
		}
		
		this.changeName = this.changeName.bind(this);
	}

	render() {
		return (
			<div>
				<header>
					<h1>SWAPI</h1>
				</header>
				<div class="content">
					<h2>List of Starships</h2>


				</div>
			</div>
		);
	}
}

export default App;
