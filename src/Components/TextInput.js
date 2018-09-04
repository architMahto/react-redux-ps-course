import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const TextInput = ({label, name, value, placeholder, onFieldChange, error}) => {
	return (
		<FormGroup controlId={name}
							 validationState={error ? 'error' : null}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl type="text"
									 name={name}
									 placeholder={placeholder}
									 value={value}
									 onChange={onFieldChange}
									 bsSize="lg"/>
			<FormControl.Feedback />
			{error && <HelpBlock>{error}</HelpBlock>}
		</FormGroup>
	)
};

export default TextInput;
