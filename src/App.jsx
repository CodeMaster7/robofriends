import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots'

import './App.css'

class App extends Component {
	render() {
		return (
			<>
				<CardList robots={robots} />
			</>
		)
	}
}

export default App
