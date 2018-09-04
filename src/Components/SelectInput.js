import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const createOption = (option) => {
	return <option key={option.value} value={option.value}>{option.text}</option>;
};

const SelectInput = ({label, name, value, placeholder, defaultOption, onFieldChange, error, options}) => {
	return(
		<FormGroup controlId={name}
							 validationState={error ? 'error' : null}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl componentClass="select"
									 bsSize="lg"
									 placeholder={placeholder}
									 onChange={onFieldChange}
									 name={name}>
				<option value="">{defaultOption}</option>
				{options.map(createOption)}
			</FormControl>
			<FormControl.Feedback />
			{error && <HelpBlock>{error}</HelpBlock>}
		</FormGroup>
	);
};

export default SelectInput;
