import React, { Component } from 'react';
import '../css/index.css';
import Content from "./Content";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/*<Navbar />*/}
				<Content />
			</div>
		);
	}
}

export default App;
