import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import './CoursesList.css';

class CoursesList extends Component {
	render() {
		return (
			<div className="Courses-Page">
				<PageHeader>Courses</PageHeader>
			</div>
		);
	}
}

export default CoursesList;
