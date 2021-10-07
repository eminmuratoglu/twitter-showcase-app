import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-1">Twiter Showcase App</h1>
					<Routes />
				</div>
			</div>
		);
	}
}
export default App;
