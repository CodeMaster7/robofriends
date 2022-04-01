import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

import './App.css'

class App extends Component {
	render() {
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
                <SearchBox />
				<CardList robots={robots} />
			</div>
		)
	}
}

export default App
