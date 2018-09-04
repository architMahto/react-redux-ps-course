import React from 'react';
import { Button } from 'react-bootstrap';

import TextInput from '../../../Components/TextInput';

import './CourseForm.css';

const CourseForm = ({ course, onFieldChange, onSubmit, allAuthors, loading, errors }) => {
	return (
		<form className="Course-Form" onSubmit={onSubmit}>
			<TextInput label="Add Course:"
								 name="title"
								 placeholder="Enter course title"
								 value={course.title}
								 onFieldChange={onFieldChange}/>
			<br/>
			<Button type={'submit'}
							disabled={loading}
							bsSize={'large'}>
				Save
			</Button>
		</form>
	)
};

export default CourseForm;
