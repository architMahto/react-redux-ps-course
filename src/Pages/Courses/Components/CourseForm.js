import React from 'react';
import { Button } from 'react-bootstrap';

import SelectInput from '../../../Components/SelectInput';
import TextInput from '../../../Components/TextInput';

import './CourseForm.css';

const CourseForm = ({ course, onFieldChange, onSubmit, authors, loading, errors }) => {
	return (
		<form className="Course-Form" onSubmit={onSubmit}>
			<TextInput label="Title"
								 name="title"
								 placeholder="Enter course title"
								 value={course.title}
								 onFieldChange={onFieldChange} />
			<br/>
			<SelectInput label="Author"
									 name="authorId"
									 value={course.authorId}
									 defaultOption="Select Author"
									 options={authors}
									 onFieldChange={onFieldChange} />
			<br/>
			<TextInput label="Category"
								 name="category"
								 placeholder="Enter course category"
								 value={course.category}
								 onFieldChange={onFieldChange} />
			<br/>
			<TextInput label="Length"
								 name="length"
								 placeholder="Enter course length"
								 value={course.length}
								 onFieldChange={onFieldChange}/>
			<br/>
			<Button type={'submit'}
							disabled={loading}
							bsSize={'large'}>
				{ loading ? 'Adding...' : 'Add' }
			</Button>
		</form>
	)
};

export default CourseForm;
