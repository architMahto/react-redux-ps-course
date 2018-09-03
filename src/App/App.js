import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../Components/Header';

import About from '../Pages/About/About';
import Courses from '../Pages/Courses/Courses';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

import configureStore from '../Store/ConfigureStore';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
  	return (
  		<Provider store={store}>
				<Router>
					<div className="App">
						<Header />
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/courses" component={Courses} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
  }
}

export default App;
