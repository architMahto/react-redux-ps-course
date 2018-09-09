import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import ButtonLink from '../../Components/ButtonLink';

import './Home.css';

const Home = () => {
	return (
		<div className="Home-Page">
			<Jumbotron>
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				<ButtonLink buttonText={'Learn more'}
										route={'/about'}/>
			</Jumbotron>
		</div>
	);
};

export default Home;
