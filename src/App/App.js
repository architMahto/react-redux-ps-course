import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Components/Header';

import About from '../Pages/About/About';
import Courses from '../Pages/Courses/Courses';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

import './App.css';

class App extends Component {
  render() {
  	return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/courses" component={Courses} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
  }
}

export default App;
