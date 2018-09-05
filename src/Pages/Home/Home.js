import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Jumbotron } from 'react-bootstrap';

import './Home.css';

const Home = () => {
	return (
		<div className="Home-Page">
			<Jumbotron>
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				<LinkContainer to="/about">
					<Button type={'button'}
									bsSize={'lg'}
									bsStyle={'primary'}>
						Learn more
					</Button>
				</LinkContainer>
			</Jumbotron>
		</div>
	);
};

export default Home;
