import React from 'react';
import { Image } from 'react-bootstrap';

import './ErrorState.css';
import error from '../Assets/error.svg';

const ErrorState = ({ errorMessage }) => {
	return (
		<div className="Error">
			<Image src={error} className="Error-image" />
			<p>{errorMessage}</p>
		</div>
	);
};

export default ErrorState;
