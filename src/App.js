import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from './pages/home';
import Details from './pages/details';

import Modal from './components/modal';

import './styles/style.min.css';

class App extends Component {
	constructor(props) {
        super(props);

        this.state = {
			starships: [],
			starshipsDetails: [],
			pilotsName: [],
			pilotsDetails: [],
			modalOpen: ''
		}

		this.changePage = this.changePage.bind(this);
		this.getDetails = this.getDetails.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	componentDidMount() {
		axios.get('https://swapi.co/api/starships?page=1')
		.then(response => {
			this.setState({ 
				starships: response.data.results
			});
			console.log(this.state.starships);
		})
	}

	changePage(event) {
		let url = 'https://swapi.co/api/starships?page=' + event.target.id;
		console.log(url);

		axios.get(url)
		.then(response => {
			this.setState({ 
				starships: response.data.results
			});
			console.log(this.state.starships);
		})
	}

	getDetails(event) {
		let url = event.target.dataset.url;
		console.log(url);

		axios.get(url)
		.then(response => {
			this.setState({ 
				starshipsDetails: response.data,
			});
			console.log(this.state.starshipsDetails);

			for(let i = 0; i < this.state.starshipsDetails.pilots.length; i++) {
				axios.get(this.state.starshipsDetails.pilots[i])
				.then(response => {
					this.setState({
						pilotsName: [...this.state.pilotsName, response.data]
					});
					console.log(this.state.pilotsName);
				})
			}
			
		})
	}

	openModal(event) {
		let url = event.target.dataset.url;

		this.setState({
			modalOpen: 'modal--active'
		});

		axios.get(url)
		.then(response => {
			this.setState({
				pilotsDetails: response.data
			});
			console.log(this.state.pilotsDetails);
		})
	}

	render() {
		return (
			<div>
				<header>
					<h1>SWAPI</h1>
				</header>
				<BrowserRouter>
					<div className="content">
						<Switch>
							<Route exact path="/" render={() => <Home starships={this.state.starships} changePage={this.changePage} getDetails={this.getDetails} />} />
							<Route path="/details" render={() => <Details details={this.state.starshipsDetails} pilots={this.state.pilotsName} openModal={this.openModal} />} />
						</Switch>

						<Modal modalOpen={this.state.modalOpen} pilotsDetails={this.state.pilotsDetails} />
						
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
