import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import './ButtonLink.css';

const ButtonLink = ({ buttonText, route }) => {
	return(
		<LinkContainer to={route}>
			<Button type={'button'}
							bsSize={'lg'}
							bsStyle={'primary'}>
				{buttonText}
			</Button>
		</LinkContainer>
	);
};

export default ButtonLink;
