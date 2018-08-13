import React from 'react';
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

import './About.css';

const About = () => {
	return (
		<div className="About-Page">
			<PageHeader>About</PageHeader>
			<p>This application uses the following technologies:</p>
			<ListGroup>
				<ListGroupItem>React</ListGroupItem>
				<ListGroupItem>ReactRouter</ListGroupItem>
				<ListGroupItem>Redux</ListGroupItem>
				<ListGroupItem>Bootstrap</ListGroupItem>
			</ListGroup>
		</div>
	);
};

export default About;
