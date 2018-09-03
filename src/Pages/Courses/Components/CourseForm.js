import React from 'react';
import { Button } from 'react-bootstrap';

import TextInput from '../../../Components/TextInput';

import './CourseForm.css';

const CourseForm = ({ course, onFieldChange, handleSubmit }) => {
	return (
		<form className="Course-Form" onSubmit={handleSubmit}>
			<TextInput label="Add Course:"
								 name="title"
								 placeholder="Enter course title"
								 value={course.title}
								 onFieldChange={onFieldChange}/>
			<br/>
			<Button type={'submit'}
							bsSize={'large'}>
				Save
			</Button>
		</form>
	)
};

export default CourseForm;
