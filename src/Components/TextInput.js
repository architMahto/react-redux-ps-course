import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const TextInput = ({label, name, value, placeholder, onFieldChange}) => {
	return (
		<FormGroup controlId={name}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type="text"
									 name={name}
									 placeholder={placeholder}
									 value={value}
									 onChange={onFieldChange}
									 bsSize="lg"/>
		</FormGroup>
	)
};

export default TextInput;
