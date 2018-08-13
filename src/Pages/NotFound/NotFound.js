import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import './NotFound.css';

const NotFound = () => {
	return (
		<div className="Not-Found-Page">
			<PageHeader>Page Not Found</PageHeader>
			<p>Whoops! Sorry, there is nothing to see here.</p>
			<Link to={'/'}>Back to Home</Link>
		</div>
	);
};

export default NotFound;
